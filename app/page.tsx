"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
  const timeline = gsap.timeline();

  timeline
    .from(".hero-welcome", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(
      ".hero-title",
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.4"
    )
    .from(
      ".hero-description",
      {
        opacity: 0,
        y: 25,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .from(
      ".stat-item",
      {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3"
    )
    .from(
      ".hero-car",
      {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.4"
    );

  return () => {
    timeline.kill();
  };
}, []);
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const animation = gsap.to(".hero-car", {
    x: () => window.innerWidth - 450,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  return () => {
    animation.kill();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const mountains = gsap.to(".mountains", {
    x: -150,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
    },
  });

  const trees = gsap.to(".trees", {
    x: -300,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });

  return () => {
    mountains.kill();
    trees.kill();
  };
}, []);

// STEP 52 - Scroll Progress
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const progress = gsap.to(".scroll-progress", {
    scaleX: 1,
    transformOrigin: "left center",
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  return () => {
    progress.kill();
  };
}, []);

  return (
    <main className="min-h-screen bg-black text-white">
        {/* Scroll Progress Bar */}
    <div className="scroll-progress fixed left-0 top-0 z-50 h-1 w-full origin-left scale-x-0 bg-white" />

      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />
        {/* Ambient Glow */}
<div className="absolute left-1/2 top-1/3 z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      {/* Mountains */}
<div className="mountains absolute bottom-24 left-0 z-0 h-64 w-full overflow-hidden">
  <div className="absolute bottom-0 left-[5%] h-48 w-72 rotate-45 bg-zinc-800/60" />
  <div className="absolute bottom-0 left-[25%] h-64 w-80 rotate-45 bg-zinc-700/40" />
  <div className="absolute bottom-0 left-[50%] h-56 w-72 rotate-45 bg-zinc-800/50" />
  <div className="absolute bottom-0 right-[10%] h-64 w-80 rotate-45 bg-zinc-700/40" />
</div>

{/* Trees */}
<div className="trees absolute bottom-24 left-0 z-5 flex w-full justify-around opacity-40">
  <span className="text-6xl">🌲</span>
  <span className="text-5xl">🌲</span>
  <span className="text-7xl">🌲</span>
  <span className="text-5xl">🌲</span>
  <span className="text-6xl">🌲</span>
</div>
        {/* Hero Content */}
        <div className="relative z-10 w-full px-5 text-center sm:px-6">

          <p className="hero-welcome mb-6 text-sm font-medium tracking-[0.6em] text-white/60">
            W E L C O M E
          </p>

          <h1 className="hero-title text-3xl font-bold tracking-[0.12em] sm:text-5xl md:text-7xl lg:text-8xl">
            I T Z F I Z Z
          </h1>

          <p className="hero-description mx-auto mt-6 max-w-xl text-base text-white/60 md:text-lg">
            Experience motion, speed and design through a scroll-driven
            interactive experience.
          </p>

          {/* Statistics */}
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">

            <div className="stat-item">
              <div className="text-4xl font-bold md:text-5xl">
                95%
              </div>
              <p className="mt-2 text-sm text-white/50">
                Performance
              </p>
            </div>

            <div className="stat-item">
              <div className="text-4xl font-bold md:text-5xl">
                87%
              </div>
              <p className="mt-2 text-sm text-white/50">
                Engagement
              </p>
            </div>

            <div className="stat-item">
              <div className="text-4xl font-bold md:text-5xl">
                92%
              </div>
              <p className="mt-2 text-sm text-white/50">
                Experience
              </p>
            </div>

          </div>

        </div>
      {/* Road */}
<div className="absolute bottom-0 left-0 z-10 h-32 w-full bg-zinc-800">
  <div className="absolute top-1/2 left-0 w-full border-t-4 border-dashed border-white/30" />
</div>

        {/* Car */}
        <img
          src="/car.png"
          alt="Car"
          className="absolute bottom-20 left-0 z-20 w-[320px] md:w-[450px]"
        />

        {/* Scroll Indicator */}
        <div className="hero-car absolute bottom-20 left-0 z-20 w-[240px] sm:w-[320px] md:w-[450px]">
          SCROLL
        </div>

      </section>

      {/* Extra height for scrolling */}
      <section className="h-[200vh] bg-black" />

    </main>
  );
}