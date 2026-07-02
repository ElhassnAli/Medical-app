export default function LoadingIndicator({
  text = "Loading...",
  fullScreen = false,
  className = "",
}) {
  const wrapperClasses = fullScreen
    ? "fixed inset-0 z-[60] flex items-center justify-center bg-white/80 backdrop-blur-sm"
    : "flex items-center justify-center py-10";

  return (
    <div
      className={`${wrapperClasses} ${className}`.trim()}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-violet-100" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-600 animate-spin" />
          <div className="h-5 w-5 rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500 animate-pulse" />
        </div>

        <div className="space-y-1">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-700">
            {text}
          </p>
          <p className="text-sm text-slate-500">Preparing your experience</p>
        </div>
      </div>
    </div>
  );
}
