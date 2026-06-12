# Moving to a VPS

Both this portfolio and the company-profile site reach the internet through a
**Cloudflare named tunnel** (outbound-only, bound to a `TUNNEL_TOKEN`), not through
the host's IP or any open port. The public hostname maps to the tunnel **inside
Cloudflare**, so moving to a VPS means running the same containers somewhere else with
the same token. No DNS changes, no port forwarding, no nginx, no SSL certificates.
Cloudflare keeps pointing at the tunnel; the tunnel just connects from the VPS instead.

## What moves

```
   Local now                              VPS after
 ┌─────────────────┐                   ┌─────────────────┐
 │ docker compose  │                   │ docker compose  │
 │  - web (Next.js)│   ── move ──>     │  - web (Next.js)│
 │  - cloudflared  │                   │  - cloudflared  │
 └────────┬────────┘                   └────────┬────────┘
          │                                     │
          └──────────────> CLOUDFLARE <─────────┘
                        (tunnel + hostname,
                         unchanged in the move)
                              ^
                              │ HTTPS
                           visitors
```

## Two ways to deploy

- **A. Build on the VPS** (simplest, needs more RAM). The VPS does `docker compose up -d
  --build`. Requires a 4 GB box: the portfolio's `next build` peaks at about **1.56 GB**
  (measured), and `docker build` adds ~100–200 MB on top, which overruns a 2 GB box
  (Ubuntu + Docker already use ~450 MB) and gets OOM-killed (`exit code 137`).
- **B. Build locally, pull on the VPS** (cheapest, recommended for a 2 GB box). Your
  laptop builds and pushes the image to Docker Hub; the VPS only pulls and runs it, which
  uses ~200–350 MB. Lets you run the Rp100k 2 GB plan comfortably. See the bottom section.

## Steps — Option A (build on the VPS)

1. **Provision the VPS.** Biznet NEO Lite MS 4.2 (2 vCPU / 4 GB / 60 GB) is the
   recommended size, on Ubuntu 22.04 or 24.04. The 4 GB matters because building the
   Next.js images can spike memory; 2 GB risks an out-of-memory kill during `next build`.

2. **Install Docker** (one-time, includes the compose plugin):
   ```sh
   ssh root@<vps-ip>
   curl -fsSL https://get.docker.com | sh
   ```

3. **Get the code on the VPS.** Push the repo to GitHub/GitLab, then:
   ```sh
   git clone <your-repo-url> portofolio_yudhya
   cd portofolio_yudhya
   ```

4. **Recreate the `.env`** (the only secret carried over):
   ```sh
   cp .env.example .env
   nano .env        # paste the SAME TUNNEL_TOKEN=eyJ... already in use
   ```
   For company-profile, also bring its `glider-stack/.env` holding the
   `NEXT_PUBLIC_EMAILJS_*` build args.

5. **Build and run:**
   ```sh
   docker compose up -d --build
   ```

6. **Verify the tunnel registered:**
   ```sh
   docker compose ps
   docker compose logs -f cloudflared   # expect "Registered tunnel connection"
   ```

7. **Cut over.** Once the VPS tunnel is connected and healthy, stop the connector on the
   old machine so only the VPS serves:
   ```sh
   # on the old machine
   docker compose down
   ```

8. **Test.** Open `https://yudhyapw.com` and `https://glider.id`.

## Notes and gotchas

- **No port collision on the VPS.** The local `-p 3001` change on company-profile is only
  for `npm run dev`. In Docker neither app publishes host ports (`expose`, not `ports`);
  cloudflared reaches each one over its own compose network. Two stacks in two folders,
  each with its own tunnel token, run side by side without conflict.
- **Build RAM is the one real constraint.** Building both images at once is the memory
  spike. Pick the 4 GB plan, add 2 GB swap as insurance, or build locally and push the
  image to a registry so the VPS only does `docker pull`.
- **No downtime needed.** A tunnel accepts more than one connector at a time and
  Cloudflare load-balances across them. Start the VPS connector, confirm it is healthy,
  then stop the old one. There is no cutover gap.
- **Different serving model per app, same flow.** This portfolio runs a standalone Node
  server; company-profile is a static export (`output: "export"`) served by
  static-web-server. The Dockerfiles differ, but the migration steps above are identical
  for both.
- **Reboot survival.** Both services use `restart: unless-stopped`, so they come back
  after a VPS reboot as long as the Docker daemon starts on boot (default on Ubuntu).

## Option B — build locally, pull on the VPS (Docker Hub)

This keeps the heavy build on your laptop so the VPS never compiles. The regular
`docker-compose.yml` names the built image (`image: ${WEB_IMAGE:-portofolio-web:local}`
alongside `build: .`), so you build and push it with compose. `docker-compose.prod.yml`
has only `image: ${WEB_IMAGE}` (no build), so the VPS just pulls and runs.

### One-time
1. Create a Docker Hub account (free) and note your username.
2. Create an access token (Account Settings → Security → New Access Token) and use it as
   the password for `docker login`. Safer than your real password.
3. Free tier gives unlimited public repos and 1 private repo. These images hold no secrets
   (the `TUNNEL_TOKEN` is injected at runtime, not baked in), so **public is fine**. Use
   the single private slot for the company-profile if you prefer.

### On your laptop — build and push
Set `WEB_IMAGE` in `.env` first (see `.env.example`), e.g.
`WEB_IMAGE=<dockerhubuser>/portofolio-web:latest`. Then build and push with compose:
```sh
cd C:\Users\yudhy\sources\portofolio_yudhya
docker login -u <dockerhubuser>                       # paste the access token
docker compose build web                              # tags the image as $WEB_IMAGE
docker compose push web                               # pushes it to Docker Hub
```
Pushing `web` by name avoids touching the pulled `cloudflared` image.

### On the VPS — pull and run
Set both values in `.env`:
```
TUNNEL_TOKEN=eyJ...
WEB_IMAGE=<dockerhubuser>/portofolio-web:latest
```
Then:
```sh
docker login -u <dockerhubuser>                       # optional for public; raises pull limit to 200/6h
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d
docker compose -f docker-compose.prod.yml logs -f cloudflared   # expect "Registered tunnel connection"
```

### Future updates
```sh
# laptop
docker compose build web && docker compose push web
# vps
docker compose -f docker-compose.prod.yml pull && docker compose -f docker-compose.prod.yml up -d
```

### Notes
- **Architecture matches:** laptop is Windows x64, the VPS is x86_64, so the image runs
  directly. Only if you build on Apple Silicon do you need `--platform linux/amd64`.
- **Tunnel hostname target differs per app:** portfolio serves on `web:3000`,
  company-profile serves on `web:80` (static export via static-web-server). Set the
  matching service URL in the Cloudflare tunnel's public-hostname config.
- **Pull rate limit is a non-issue:** Docker Hub's limit is per 6 hours, and a deploy is
  ~2 pulls. Logged in you get 200/6h.
