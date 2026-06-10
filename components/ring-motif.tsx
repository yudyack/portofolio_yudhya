/**
 * Signature element: concentric topographic rings around a forest dot,
 * with two leaf-shaped sage fills tucked behind. Stays green even when
 * the rest of the page uses neutral accents (handoff decision #8).
 */
export function RingMotif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Leaf fills — sharp tips at opposite corners, behind the rings */}
      <g fill="var(--sage-deep)" opacity="0.4">
        <path d="M118 56 C158 56 184 78 184 116 C144 116 118 94 118 56 Z" />
        <path d="M104 84 C136 84 156 102 156 132 C124 132 104 114 104 84 Z" />
      </g>
      {/* Concentric rings, forest, 1.5px, fading outward */}
      <circle cx="100" cy="100" r="92" stroke="var(--accent)" strokeWidth="1.5" opacity="0.2" />
      <circle cx="100" cy="100" r="66" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
      <circle cx="100" cy="100" r="42" stroke="var(--accent)" strokeWidth="1.5" opacity="0.45" />
      <circle cx="100" cy="100" r="21" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6" />
      <circle cx="100" cy="100" r="3.5" fill="var(--accent)" />
    </svg>
  );
}
