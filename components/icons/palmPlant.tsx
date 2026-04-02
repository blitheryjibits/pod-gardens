// components/icons/GoldenCanePalm.tsx
export function GoldenCanePalm(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 120" aria-hidden="true" role="img" {...props}>
      {/* Pot */}
      <path d="M25 80h30l-4 20H29l-4-20z" fill="currentColor" />

      {/* Main trunk */}
      <path
        d="M40 80V40"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Secondary trunks */}
      <path
        d="M35 80c0-12 -2-22 -6-32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M45 80c0-12 2-22 6-32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Left drooping fronds */}
      <path
        d="M32 42c-10 -6 -18 -8 -26 -6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M34 38c-9 -10 -16 -14 -24 -16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36 34c-7 -12 -12 -18 -20 -22"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Right drooping fronds */}
      <path
        d="M48 42c10 -6 18 -8 26 -6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M46 38c9 -10 16 -14 24 -16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M44 34c7 -12 12 -18 20 -22"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
