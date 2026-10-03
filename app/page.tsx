"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const pageRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      gsap.set(
        [
          ".hero-welcome",
          ".hero-title",
          ".hero-description",
          ".stat-item",
        ],
        {
          opacity: 1,
          y: 0,
        }
      );

      // -----------------------------
// INTRO ANIMATION
// -----------------------------

const intro = gsap.timeline();

intro
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
  );
      // -----------------------------
      // CAR SCROLL ANIMATION
      // -----------------------------

      // CAR SCROLL ANIMATION
gsap.to(".hero-car", {
  x: () => {
    const car = document.querySelector(".hero-car") as HTMLElement;

    return window.innerWidth - car.offsetWidth - 40;
  },
  ease: "none",
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "+=1000",
    scrub: true,
    invalidateOnRefresh: true,
  },
});
      // -----------------------------
      // SCROLL PROGRESS
      // -----------------------------

      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",

        scrollTrigger: {
          trigger: pageRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // -----------------------------
      // REFRESH
      // -----------------------------

      ScrollTrigger.refresh();
    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-black text-white"
    >
      {/* SCROLL PROGRESS */}

      <div className="scroll-progress fixed left-0 top-0 z-50 h-1 w-full origin-left scale-x-0 bg-white" />

      {/* HERO */}

      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* BACKGROUND */}

        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />

        {/* GLOW */}

        <div
          className="
            absolute
            left-1/2
            top-1/3
            z-0
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-white/5
            blur-3xl
          "
        />

        {/* MOUNTAINS */}

        <div
          className="
            absolute
            bottom-24
            left-0
            z-0
            h-64
            w-full
          "
        >
          <div className="absolute bottom-0 left-[5%] h-48 w-72 rotate-45 bg-zinc-800/60" />

          <div className="absolute bottom-0 left-[25%] h-64 w-80 rotate-45 bg-zinc-700/40" />

          <div className="absolute bottom-0 left-[50%] h-56 w-72 rotate-45 bg-zinc-800/50" />

          <div className="absolute bottom-0 right-[10%] h-64 w-80 rotate-45 bg-zinc-700/40" />
        </div>

        {/* TREES */}

        <div
          className="
            absolute
            bottom-24
            left-0
            z-5
            flex
            w-full
            justify-around
            opacity-40
          "
        >
          <span className="text-6xl">🌲</span>
          <span className="text-5xl">🌲</span>
          <span className="text-7xl">🌲</span>
          <span className="text-5xl">🌲</span>
          <span className="text-6xl">🌲</span>
        </div>

        {/* HERO CONTENT */}

        <div
          className="
            relative
            z-10
            w-full
            px-5
            text-center
            sm:px-6
          "
        >
          <p
            className="
              hero-welcome
              mb-6
              text-sm
              font-medium
              tracking-[0.6em]
              text-white/60
            "
          >
            W E L C O M E
          </p>

          <h1
            className="
              hero-title
              text-3xl
              font-bold
              tracking-[0.12em]
              sm:text-5xl
              md:text-7xl
              lg:text-8xl
            "
          >
            I T Z F I Z Z
          </h1>

          <p
            className="
              hero-description
              mx-auto
              mt-6
              max-w-xl
              text-base
              text-white/60
              md:text-lg
            "
          >
            Experience motion, speed and design
            through a scroll-driven interactive
            experience.
          </p>

          {/* STATISTICS */}

          <div
            className="
              mx-auto
              mt-14
              grid
              max-w-3xl
              grid-cols-1
              gap-8
              sm:grid-cols-3
            "
          >
            <div className="stat-item opacity-100">
          
              <div className="text-4xl font-bold md:text-5xl">
                95%
              </div>

              <p className="mt-2 text-sm text-white/50">
                Performance
              </p>
            </div>

            <div className="stat-item opacity-100">
              <div className="text-4xl font-bold md:text-5xl">
                87%
              </div>

              <p className="mt-2 text-sm text-white/50">
                Engagement
              </p>
            </div>

            <div className="stat-item opacity-100">
              <div className="text-4xl font-bold md:text-5xl">
                92%
              </div>

              <p className="mt-2 text-sm text-white/50">
                Experience
              </p>
            </div>
          </div>
        </div>

        {/* ROAD */}

        <div
          className="
            absolute
            bottom-0
            left-0
            z-10
            h-32
            w-full
            bg-zinc-800
          "
        >
          <div
            className="
              absolute
              left-0
              top-1/2
              w-full
              border-t-4
              border-dashed
              border-white/30
            "
          />
        </div>

        {/* CAR */}

        <img
          src="/car.png"
          alt="Car"
          className="
            hero-car
            absolute
            bottom-8
            left-0
            z-20
            w-[240px]
            sm:w-[320px]
            md:w-[450px]
          "
        />

        {/* SCROLL */}

        <div
          className="
            absolute
            bottom-8
            left-1/2
            z-30
            -translate-x-1/2
            text-xs
            tracking-[0.3em]
            text-white/50
          "
        >
          SCROLL
        </div>
      </section>

      {/* FUTURE SECTION */}

      <section
        className="
          flex
          h-screen
          items-center
          justify-center
          bg-black
        "
      >
        <div className="text-center">
          <p className="text-sm tracking-[0.5em] text-white/40">
            THE NEXT JOURNEY
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            The Future Starts Here.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-white/50">
            Scroll-driven motion creates an interactive
            experience where design and movement work
            together.
          </p>
        </div>
      </section>
    </main>
  );
}