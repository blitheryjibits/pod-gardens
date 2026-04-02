// components/icons/PlantLineArt.tsx
export function PlantLineArt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 80 120"
      aria-hidden="true"
      role="img"
      fill="none"
      {...props}
    >
      {/* Pot outline */}
      <rect
        x="20"
        y="70"
        width="40"
        height="26"
        rx="4"
        ry="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Pot stripes */}
      <path
        d="M26 70v26M32 70v26M38 70v26M44 70v26M50 70v26"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Stems */}
      <path
        d="M40 70V46"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M36 70c0-8-2-15-5-22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M44 70c0-8 2-15 5-22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Fronds left */}
      <path
        d="M35 48c-8-6-14-8-21-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M37 44c-7-8-12-11-19-13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M39 40c-6-9-10-13-16-16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Fronds right */}
      <path
        d="M45 48c8-6 14-8 21-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M43 44c7-8 12-11 19-13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M41 40c6-9 10-13 16-16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
