// components/icons/PlantVector.tsx
export function PlantVector(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 120" aria-hidden="true" role="img" {...props}>
      {/* Pot body */}
      <rect
        x="20"
        y="72"
        width="40"
        height="26"
        rx="4"
        ry="4"
        fill="#FDFDFD"
        stroke="#111827"
        strokeWidth="2"
      />
      {/* Pot stripes */}
      <rect x="24" y="72" width="3" height="26" fill="#111827" />
      <rect x="30" y="72" width="3" height="26" fill="#111827" />
      <rect x="36" y="72" width="3" height="26" fill="#111827" />
      <rect x="42" y="72" width="3" height="26" fill="#111827" />
      <rect x="48" y="72" width="3" height="26" fill="#111827" />

      {/* Stems (slightly yellow-green) */}
      <path
        d="M40 72V46"
        stroke="#4B9560"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36 72c0-8-2-15-5-22"
        stroke="#4B9560"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M44 72c0-8 2-15 5-22"
        stroke="#4B9560"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Fronds left */}
      <path
        d="M35 48c-8-6-14-8-21-7"
        fill="none"
        stroke="#2F855A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M37 44c-7-8-12-11-19-13"
        fill="none"
        stroke="#2F855A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M39 40c-6-9-10-13-16-16"
        fill="none"
        stroke="#2F855A"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Fronds right */}
      <path
        d="M45 48c8-6 14-8 21-7"
        fill="none"
        stroke="#2F855A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M43 44c7-8 12-11 19-13"
        fill="none"
        stroke="#2F855A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M41 40c6-9 10-13 16-16"
        fill="none"
        stroke="#2F855A"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
