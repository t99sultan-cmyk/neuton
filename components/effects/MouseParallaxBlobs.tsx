"use client";

import { useEffect, useRef } from "react";

/**
 * Two ambient blobs that drift with the mouse — gives depth on desktop.
 * On mobile (no fine pointer) they idle-float instead.
 */
export function MouseParallaxBlobs() {
  const aRef = useRef<HTMLDivElement>(null);
  const bRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    let raf = 0;
    let target = { x: 0, y: 0 };
    let cur = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 30;
      target.y = (e.clientY / window.innerHeight - 0.5) * 30;
    };
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;
      if (aRef.current) {
        aRef.current.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0)`;
      }
      if (bRef.current) {
        bRef.current.style.transform = `translate3d(${-cur.x * 0.6}px, ${-cur.y * 0.6}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={aRef}
        aria-hidden
        className="absolute -top-32 -right-32 size-[640px] rounded-full opacity-40 blur-[120px] animate-float-slow will-change-transform"
        style={{ background: "radial-gradient(closest-side, #E8B589, transparent)" }}
      />
      <div
        ref={bRef}
        aria-hidden
        className="absolute top-40 -left-32 size-[520px] rounded-full opacity-25 blur-[110px] animate-float-slow-rev will-change-transform"
        style={{ background: "radial-gradient(closest-side, #A8D9BC, transparent)" }}
      />
    </>
  );
}
