/** Barre de progression accessible. */
export default function ProgressBar({
  value,
  label,
  className = "",
}: {
  value: number; // 0..100
  label?: string;
  className?: string;
}) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className={className}>
      {label && (
        <div className="mb-1 flex items-center justify-between text-xs font-medium text-brand-600 dark:text-brand-300">
          <span>{label}</span>
          <span>{v}%</span>
        </div>
      )}
      <div
        className="h-2.5 w-full overflow-hidden rounded-full bg-brand-200 dark:bg-brand-700"
        role="progressbar"
        aria-valuenow={v}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-prairie-500 transition-all duration-500"
          style={{ width: `${v}%` }}
        />
      </div>
    </div>
  );
}
