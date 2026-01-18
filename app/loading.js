export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-green-300/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-teal-600" />

        {/* Text */}
        <p className="text-sm text-gray-500 tracking-wide">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
