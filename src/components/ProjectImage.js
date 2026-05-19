"use client";

import { useState } from "react";

export default function ProjectImage({
  src,
  alt,
  accent = "from-slate-600 to-slate-800",
  className = "",
  contain = false,
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${accent} ${className}`}
      >
        <span className="max-w-[80%] px-4 text-center text-sm font-medium text-white/90">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full ${contain ? "object-contain bg-slate-50 p-2" : "object-cover"} ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
