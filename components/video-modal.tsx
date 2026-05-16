"use client";

import { useState, useEffect, useCallback } from "react";

export function VideoModal({
  videoUrl,
  children,
}: {
  videoUrl: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full text-left cursor-pointer bg-transparent border-0 p-0"
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl cursor-pointer bg-transparent border-0 leading-none"
          >
            ✕
          </button>
          <div
            className="w-[90vw] max-w-[1100px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative pb-[64.63%]">
              <iframe
                src={videoUrl + "?autoplay=1"}
                className="absolute inset-0 w-full h-full rounded-md"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
