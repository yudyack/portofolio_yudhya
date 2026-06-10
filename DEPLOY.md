# Deploying yudhyapw.com

Self-hosted with Docker, exposed to the internet through a Cloudflare named tunnel.
No ports are opened on your router or machine; Cloudflare reaches the app over an
outbound-only tunnel.

## What's in the box

- `Dockerfile` — multi-stage build producing a small standalone Next.js server image.
- `docker-compose.yml` — two services: `web` (the app) and `cloudflared` (the tunnel).
- `.env` — holds `TUNNEL_TOKEN` (you create this from `.env.example`; it is gitignored).

The app listens on port 3000 inside the Docker network only. `cloudflared` connects to
it as `http://web:3000`.

## One-time Cloudflare setup

1. Make sure **yudhyapw.com** is added to your Cloudflare account (its nameservers point
   to Cloudflare). This is required for Cloudflare to route the hostname.
2. Go to the **Zero Trust** dashboard → **Networks → Tunnels → Create a tunnel**.
3. Choose **Cloudflared** as the connector type. Name it (e.g. `portfolio`).
4. On the install screen, pick **Docker**. Cloudflare shows a command containing a long
   token (`--token eyJ...`). Copy just the token value.
5. Still in the tunnel config, add a **Public Hostname**:
   - Subdomain: leave blank (or `www`)
   - Domain: `yudhyapw.com`
   - Service: **HTTP** → `web:3000`
   - Add a second public hostname for `www.yudhyapw.com` the same way if you want it.

## Run it

```sh
# from the project root
cp .env.example .env
# paste the token into .env so it reads: TUNNEL_TOKEN=eyJ...

docker compose up -d --build
```

That builds the image, starts the app, and connects the tunnel. Visit
**https://yudhyapw.com** — Cloudflare terminates HTTPS for you, no certificate setup needed.

Check both containers are healthy:

```sh
docker compose ps
docker compose logs -f cloudflared   # should show "Registered tunnel connection"
```

## Updating the site after a content or code change

```sh
docker compose up -d --build
```

This rebuilds the image (which re-runs `npm run build`, picking up new posts and edits)
and restarts the app with zero tunnel reconfiguration. The cloudflared container keeps
running across rebuilds.

## Stopping

```sh
docker compose down
```

## Notes

- **Markdown content is baked in at build time.** A new post in `content/writing/` only
  appears after a rebuild (`--build`). This is expected; every page is static.
- **Removing draft posts before launch:** set `draft: false` (or delete the file) in the
  relevant `content/writing/*.md`, then rebuild.
- **The cat image** is served through Next's image optimizer inside the container, so it
  stays compressed and correctly sized. No extra config needed.
- **Logs / restarts:** both services use `restart: unless-stopped`, so they come back on
  reboot as long as the Docker daemon starts on boot.
