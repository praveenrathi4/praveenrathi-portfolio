"use client";

import Image from "next/image";
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
      <Wrapper
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${accent} ${className}`}
      >
        <span className="max-w-[80%] px-4 text-center text-sm font-medium text-white/90">
          {alt}
        </span>
      </Wrapper>
    );
  }

  return (
    <Wrapper className={`relative h-full w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        className={contain ? "object-contain bg-slate-50 p-2" : "object-cover"}
        onError={() => setFailed(true)}
      />
    </Wrapper>
  );
}

function Wrapper({ className, children }) {
  return <div className={className}>{children}</div>;
}
