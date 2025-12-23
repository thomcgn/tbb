"use client";

export default function ReservationModal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md bg-white text-black p-4 rounded-lg border">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}
