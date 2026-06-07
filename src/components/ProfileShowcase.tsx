"use client";

import type { PointerEvent } from "react";
import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

type ProfileShowcaseProps = {
  name: string;
  role: string;
  portfolioUrl?: string;
  githubUrl: string;
};

export function ProfileShowcase({
  name,
  role,
  portfolioUrl = "#projects",
  githubUrl,
}: ProfileShowcaseProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const rotateXSpring = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const rotateYSpring = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const dx = (px - 0.5) * 2;
    const dy = (py - 0.5) * 2;

    rotateY.set(dx * 14);
    rotateX.set(-dy * 14);
  };

  const handlePointerLeave = () => {
    if (reduceMotion) return;
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        ref={ref}
        className="relative w-full max-w-sm"
        style={{ perspective: "1000px" }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.94 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
      >
        {/* Ambient glow — fades in and out */}
        <motion.div
          aria-hidden="true"
          className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-400/30 via-indigo-400/25 to-fuchsia-400/30 blur-2xl"
          animate={
            reduceMotion
              ? undefined
              : { opacity: [0.35, 0.75, 0.35], scale: [0.96, 1.04, 0.96] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }
        />

        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-zinc-200/80 dark:ring-zinc-700/80"
          style={{
            transformStyle: "preserve-3d",
            rotateX: rotateXSpring,
            rotateY: rotateYSpring,
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  opacity: [1, 0.88, 1],
                  y: [0, -6, 0],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  opacity: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }
          }
        >
          {/* Inner shine layer — cross-fades for depth */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-white/0 via-white/20 to-white/0"
            animate={
              reduceMotion
                ? undefined
                : { opacity: [0, 0.5, 0], x: ["-30%", "130%"] }
            }
            transition={
              reduceMotion
                ? undefined
                : { duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }
            }
          />

          <div
            className="relative aspect-[3/4] w-full"
            style={{ transform: "translateZ(20px)" }}
          >
            <Image
              src="/profile.png"
              alt={`${name} — professional portrait`}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 384px"
              className="object-cover object-top"
            />
          </div>

          {/* Bottom name strip with 3D offset */}
          <motion.div
            className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-5 pb-5 pt-16"
            style={{ transform: "translateZ(30px)" }}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            transition={reduceMotion ? undefined : { delay: 0.4, duration: 0.6 }}
          >
            <p className="text-lg font-semibold text-white">{name}</p>
            <p className="text-sm text-white/80">{role}</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Quick links */}
      <motion.div
        className="flex w-full max-w-sm flex-wrap justify-center gap-3"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={reduceMotion ? undefined : { delay: 0.5, duration: 0.5 }}
      >
        <motion.a
          href={portfolioUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03 }}
          transition={
            reduceMotion
              ? undefined
              : { type: "spring", stiffness: 260, damping: 20 }
          }
        >
          My Portfolio
        </motion.a>
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
          whileHover={reduceMotion ? undefined : { y: -2, scale: 1.03 }}
          transition={
            reduceMotion
              ? undefined
              : { type: "spring", stiffness: 260, damping: 20 }
          }
        >
          GitHub
        </motion.a>
      </motion.div>
    </div>
  );
}
