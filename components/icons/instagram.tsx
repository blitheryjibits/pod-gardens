// components/icons/Instagram.tsx
export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="img" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        ry="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}
