// components/services/ServiceCard.tsx
export function ServiceCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl editorial-shadow p-8 lg:p-12 ${className}`}>
      {children}
    </div>
  );
}
