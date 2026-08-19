"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Compass,
  MapPin,
  Mountain,
  Sparkles,
  Wallet,
} from "lucide-react";

const destinations = {
  Dharamshala: {
    region: "Himachal Pradesh",
    description: "Mountain cafés, pine forests & Himalayan views.",
    activities: ["McLeod Ganj", "Triund", "Naddi Viewpoint"],
  },
  Manali: {
    region: "Himachal Pradesh",
    description: "River valleys, mountain trails & old-world cafés.",
    activities: ["Old Manali", "Solang Valley", "Vashisht"],
  },
  Rishikesh: {
    region: "Uttarakhand",
    description: "Rivers, forests, cafés & a little adrenaline.",
    activities: ["Laxman Jhula", "River Rafting", "Beatles Ashram"],
  },
};

type Destination = keyof typeof destinations;

export default function Home() {
  const [destination, setDestination] =
    useState<Destination>("Dharamshala");

  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState(5000);
  const [vibe, setVibe] = useState("Adventure");
  const [building, setBuilding] = useState(false);
  const [selectedDay, setSelectedDay] = useState(1);

  const currentDestination = destinations[destination];

  const buildTrip = () => {
    setBuilding(true);

    setTimeout(() => {
      setBuilding(false);
    }, 1400);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0c0b] text-[#f4f2eb]">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative min-h-screen overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#0b0c0b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-black/20" />

        {/* NAV */}

        <nav className="relative z-20 px-5 pt-5 sm:px-8">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between">

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                <Mountain size={16} />
              </div>

              <span className="text-sm font-medium tracking-tight">
                TrailNotFound
              </span>
            </div>

            <div className="hidden items-center gap-9 rounded-full border border-white/10 bg-black/20 px-6 py-3 text-xs text-white/65 backdrop-blur-xl md:flex">
              <a href="#planner" className="transition hover:text-white">
                Plan
              </a>
              <a href="#product" className="transition hover:text-white">
                Preview
              </a>
              <a href="#story" className="transition hover:text-white">
                Story
              </a>

              <a href="#how" className="transition hover:text-white">
                How it works
              </a>

              <a href="#discover" className="transition hover:text-white">
                Discover
              </a>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("planner")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-2 rounded-full bg-[#f4f2eb] px-5 py-3 text-xs font-semibold text-black transition hover:scale-105"
            >
              Start exploring
              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

          </div>
        </nav>

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1400px] items-center px-5 pb-20 pt-20 sm:px-8">

          <div className="w-full">

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >

              <div className="mb-7 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/55">
                <Sparkles size={13} />
                AI-powered travel planning
              </div>

              <h1 className="max-w-[950px] text-[clamp(4rem,10vw,9.5rem)] font-medium leading-[0.82] tracking-[-0.075em]">
                FIND YOUR
                <br />
                <span className="text-white/55">NEXT ESCAPE.</span>
              </h1>

              <p className="mt-9 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                Tell TrailNotFound where you want to go, how long you have,
                and what kind of adventure you're after.
                <span className="text-white">
                  {" "}
                  We'll figure out the rest.
                </span>
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="mt-9 flex w-full max-w-2xl flex-col gap-2 rounded-[22px] border border-white/15 bg-black/35 p-2 backdrop-blur-xl sm:flex-row"
              >

                <div className="flex flex-1 items-center gap-3 px-4 py-3">
                  <MapPin size={17} className="text-white/45" />

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/35">
                      Where to?
                    </p>

                    <p className="mt-0.5 text-sm text-white/85">
                      Somewhere worth remembering
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    document
                      .getElementById("planner")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group flex items-center justify-center gap-3 rounded-[15px] bg-[#f4f2eb] px-6 py-4 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Build my trip

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

              </motion.div>

            </motion.div>
          </div>

          {/* FLOATING CARD */}

          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9 }}
            className="absolute bottom-24 right-8 hidden w-[300px] lg:block xl:right-14"
          >

            <div className="rounded-[24px] border border-white/15 bg-[#111311]/75 p-4 shadow-2xl backdrop-blur-2xl">

              <div
                className="relative h-32 overflow-hidden rounded-[17px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85')",
                }}
              >

                <div className="absolute inset-0 bg-black/25" />

                <div className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] backdrop-blur-md">
                  AI itinerary
                </div>

                <div className="absolute bottom-3 left-3">
                  <p className="text-[10px] uppercase tracking-widest text-white/60">
                    Suggested escape
                  </p>

                  <p className="mt-0.5 text-lg font-medium">
                    Dharamshala
                  </p>
                </div>

              </div>

              <div className="mt-4 flex items-end justify-between">

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/35">
                    3 days · Mountains
                  </p>

                  <p className="mt-1 text-sm text-white/80">
                    From ₹4,850
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                  <ArrowRight size={15} />
                </div>

              </div>

            </div>
          </motion.div>

        </div>

        {/* BOTTOM META */}

        <div className="absolute bottom-7 left-5 right-5 z-20 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/40 sm:left-8 sm:right-8">

          <span>Made for the curious</span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="hidden items-center gap-2 sm:flex"
          >
            Scroll to explore
            <ArrowDown size={13} />
          </motion.div>

          <span>01 / 05</span>

        </div>

      </section>


      {/* ===================================================== */}
      {/* PLANNER */}
      {/* ===================================================== */}

      <section
        id="planner"
        className="relative border-t border-white/[0.06] px-5 py-28 sm:px-8 sm:py-36"
      >

        <div className="mx-auto max-w-[1200px]">

          {/* Section heading */}

          <div className="max-w-2xl">

            <p className="text-xs uppercase tracking-[0.25em] text-white/35">
              Build your escape
            </p>

            <h2 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl">
              Tell us what
              <br />
              <span className="text-white/35">
                you're looking for.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/40">
              Give us the basics. We'll turn them into a trip that actually
              makes sense.
            </p>

          </div>


          {/* PLANNER CARD */}

          <div className="mt-20 grid overflow-hidden rounded-[30px] border border-white/10 bg-[#111311] lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT CONTROLS */}

            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">

              {/* Destination */}

              <div>
                <div className="flex items-center justify-between">

                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Destination
                  </label>

                  <MapPin size={14} className="text-white/25" />

                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">

                  {(Object.keys(destinations) as Destination[]).map(
                    (place) => (
                      <button
                        key={place}
                        onClick={() => setDestination(place)}
                        className={`rounded-xl border px-3 py-3 text-left text-xs transition ${
                          destination === place
                            ? "border-white/30 bg-white text-black"
                            : "border-white/[0.07] bg-white/[0.025] text-white/55 hover:bg-white/[0.06]"
                        }`}
                      >
                        {place}
                      </button>
                    )
                  )}

                </div>
              </div>


              {/* DAYS */}

              <div className="mt-9">

                <div className="flex items-center justify-between">

                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Duration
                  </label>

                  <span className="text-sm text-white/70">
                    {days} days
                  </span>

                </div>

                <input
                  type="range"
                  min="2"
                  max="7"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="mt-5 w-full accent-white"
                />

                <div className="mt-2 flex justify-between text-[10px] text-white/25">
                  <span>2 days</span>
                  <span>7 days</span>
                </div>

              </div>


              {/* BUDGET */}

              <div className="mt-9">

                <div className="flex items-center justify-between">

                  <label className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/35">
                    <Wallet size={13} />
                    Budget
                  </label>

                  <span className="text-sm text-white/70">
                    ₹{budget.toLocaleString("en-IN")}
                  </span>

                </div>

                <input
                  type="range"
                  min="2000"
                  max="15000"
                  step="500"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="mt-5 w-full accent-white"
                />

                <div className="mt-2 flex justify-between text-[10px] text-white/25">
                  <span>₹2k</span>
                  <span>₹15k</span>
                </div>

              </div>


              {/* VIBE */}

              <div className="mt-9">

                <label className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                  Your vibe
                </label>

                <div className="mt-4 flex flex-wrap gap-2">

                  {["Adventure", "Nature", "Slow travel", "Food"].map(
                    (item) => (
                      <button
                        key={item}
                        onClick={() => setVibe(item)}
                        className={`rounded-full border px-4 py-2 text-xs transition ${
                          vibe === item
                            ? "border-white bg-white text-black"
                            : "border-white/10 text-white/45 hover:border-white/25 hover:text-white"
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}

                </div>

              </div>


              {/* BUILD BUTTON */}

              <button
                onClick={buildTrip}
                disabled={building}
                className="group mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 text-sm font-semibold text-black transition hover:scale-[1.01] disabled:opacity-70"
              >

                {building ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-4 w-4 rounded-full border-2 border-black/20 border-t-black"
                    />

                    Building your trail...
                  </>
                ) : (
                  <>
                    Build my trail

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}

              </button>

            </div>


            {/* RIGHT PREVIEW */}

            <div className="relative min-h-[550px] overflow-hidden bg-[#0c0e0d] p-6 sm:p-8 lg:p-10">

              {/* Decorative circles */}

              <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/[0.035]" />

              <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-white/[0.035]" />


              <AnimatePresence mode="wait">

                <motion.div
                  key={`${destination}-${days}-${vibe}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10"
                >

                  {/* Preview heading */}

                  <div className="flex items-start justify-between">

                    <div>

                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                        Your trail
                      </p>

                      <h3 className="mt-2 text-3xl font-medium tracking-tight">
                        {destination}
                      </h3>

                      <p className="mt-2 text-xs text-white/35">
                        {currentDestination.region}
                      </p>

                    </div>

                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] text-emerald-300">
                      ✦ AI planned
                    </div>

                  </div>


                  {/* Description */}

                  <div className="mt-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">

                    <p className="text-sm leading-6 text-white/55">
                      {currentDestination.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      <span className="rounded-full bg-white/[0.05] px-3 py-1.5 text-[10px] text-white/40">
                        {days} days
                      </span>

                      <span className="rounded-full bg-white/[0.05] px-3 py-1.5 text-[10px] text-white/40">
                        {vibe}
                      </span>

                      <span className="rounded-full bg-white/[0.05] px-3 py-1.5 text-[10px] text-white/40">
                        ₹{budget.toLocaleString("en-IN")}
                      </span>

                    </div>

                  </div>


                  {/* Itinerary */}

                  <div className="mt-8">

                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      Suggested route
                    </p>

                    <div className="mt-4 space-y-3">

                      {currentDestination.activities.map(
                        (activity, index) => (
                          <div
                            key={activity}
                            className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:bg-white/[0.05]"
                          >

                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-[10px] text-white/35">
                              0{index + 1}
                            </div>

                            <div className="flex-1">

                              <p className="text-sm font-medium">
                                {activity}
                              </p>

                              <p className="mt-1 text-[11px] text-white/30">
                                {index === 0
                                  ? "Start the day"
                                  : index === 1
                                  ? "Main experience"
                                  : "Slow down & explore"}
                              </p>

                            </div>

                            <Check
                              size={15}
                              className="text-white/20 transition group-hover:text-emerald-300"
                            />

                          </div>
                        )
                      )}

                    </div>

                  </div>


                  {/* Bottom stats */}

                  <div className="mt-8 grid grid-cols-3 gap-2">

                    <div className="rounded-xl border border-white/[0.06] p-4">
                      <p className="text-[9px] uppercase tracking-wider text-white/25">
                        Duration
                      </p>

                      <p className="mt-2 text-sm">
                        {days} days
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.06] p-4">
                      <p className="text-[9px] uppercase tracking-wider text-white/25">
                        Budget
                      </p>

                      <p className="mt-2 text-sm">
                        ₹{budget.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/[0.06] p-4">
                      <p className="text-[9px] uppercase tracking-wider text-white/25">
                        Vibe
                      </p>

                      <p className="mt-2 truncate text-sm">
                        {vibe}
                      </p>
                    </div>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>

          </div>

        </div>

      </section>
{/* ===================================================== */}
{/* PRODUCT SHOWCASE */}
{/* ===================================================== */}

<section
  id="product"
  className="border-t border-white/[0.06] px-5 py-32 sm:px-8 sm:py-40"
>
  <div className="mx-auto max-w-[1200px]">

    {/* Heading */}

    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-white/35">
          Your trip, figured out
        </p>

        <h2 className="mt-5 text-5xl font-medium leading-[0.9] tracking-[-0.06em] sm:text-7xl">
          From idea
          <br />
          <span className="text-white/35">
            to itinerary.
          </span>
        </h2>
      </div>

      <p className="max-w-md text-sm leading-7 text-white/40 lg:justify-self-end">
        TrailNotFound turns a few simple preferences into a route you can
        actually follow — places to go, things to do, and what the trip
        might cost.
      </p>

    </div>


    {/* PRODUCT WINDOW */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative mt-20 overflow-hidden rounded-[30px] border border-white/10 bg-[#111311] shadow-2xl"
    >

      {/* WINDOW HEADER */}

      <div className="flex flex-col gap-5 border-b border-white/[0.07] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">

        <div className="flex items-center gap-3">

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
            <Mountain size={14} />
          </div>

          <div>
            <p className="text-sm font-medium">
              Dharamshala
            </p>

            <p className="text-[10px] text-white/30">
              Himachal Pradesh · {days} days
            </p>
          </div>

        </div>

        <div className="flex gap-2">

          <span className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[10px] text-white/40">
            {vibe}
          </span>

          <span className="rounded-full border border-emerald-400/15 bg-emerald-400/5 px-3 py-1.5 text-[10px] text-emerald-300/70">
            AI planned
          </span>

        </div>

      </div>


      {/* MAIN PRODUCT */}

      <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

        {/* LEFT — ROUTE */}

        <div className="relative min-h-[520px] overflow-hidden border-b border-white/[0.07] bg-[#0c0e0d] p-6 sm:p-8 lg:border-b-0 lg:border-r">

          {/* Fake map */}

          <div className="absolute inset-0 opacity-60">

            <div className="absolute left-[20%] top-[15%] h-32 w-32 rounded-full border border-white/[0.045]" />

            <div className="absolute right-[10%] top-[35%] h-64 w-64 rounded-full border border-white/[0.035]" />

            <div className="absolute bottom-[10%] left-[5%] h-72 w-72 rounded-full border border-white/[0.035]" />

            <div className="absolute left-[45%] top-[10%] h-[420px] w-px rotate-[25deg] bg-white/[0.04]" />

            <div className="absolute left-[20%] top-[45%] h-px w-[500px] -rotate-[18deg] bg-white/[0.04]" />

          </div>


          {/* Route line */}

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 500 520"
            preserveAspectRatio="none"
          >
            <path
              d="M 90 110 C 160 160, 100 240, 250 275 S 390 380, 350 440"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
          </svg>


          {/* Map label */}

          <div className="relative z-10">

            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/30">
              <Compass size={13} />
              Your route
            </div>

          </div>


          {/* Locations */}

          {[
            {
              top: "20%",
              left: "15%",
              number: "01",
              title: "McLeod Ganj",
            },
            {
              top: "48%",
              left: "48%",
              number: "02",
              title: "Triund",
            },
            {
              top: "78%",
              left: "67%",
              number: "03",
              title: "Naddi",
            },
          ].map((location) => (

            <motion.div
              key={location.number}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: Number(location.number) * 0.15,
              }}
              className="absolute z-10"
              style={{
                top: location.top,
                left: location.left,
              }}
            >

              <div className="group">

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#111311] text-[10px] shadow-xl transition group-hover:border-white/50">
                  {location.number}
                </div>

                <div className="mt-2 whitespace-nowrap rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] text-white/55 backdrop-blur-md">
                  {location.title}
                </div>

              </div>

            </motion.div>

          ))}


          {/* Bottom map info */}

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">

            <div>

              <p className="text-[9px] uppercase tracking-wider text-white/25">
                Total distance
              </p>

              <p className="mt-1 text-sm">
                32 km
              </p>

            </div>

            <div className="text-right">

              <p className="text-[9px] uppercase tracking-wider text-white/25">
                Estimated spend
              </p>

              <p className="mt-1 text-sm">
                ₹{budget.toLocaleString("en-IN")}
              </p>

            </div>

          </div>

        </div>


        {/* RIGHT — ITINERARY */}

        <div className="p-6 sm:p-8 lg:p-10">

          {/* Header */}

          <div className="flex items-end justify-between">

            <div>

              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Itinerary
              </p>

              <h3 className="mt-2 text-2xl font-medium">
                Your {days}-day escape
              </h3>

            </div>

            <div className="hidden text-right sm:block">

              <p className="text-[9px] uppercase tracking-wider text-white/25">
                Total
              </p>

              <p className="mt-1 text-sm">
                ₹{budget.toLocaleString("en-IN")}
              </p>

            </div>

          </div>


          {/* Day tabs */}

          <div className="mt-8 flex gap-2 overflow-x-auto pb-1">

            {Array.from(
              { length: Math.min(days, 5) },
              (_, index) => index + 1
            ).map((day) => (

              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`shrink-0 rounded-full border px-4 py-2 text-[10px] transition ${
                  selectedDay === day
                    ? "border-white bg-white text-black"
                    : "border-white/[0.08] text-white/35 hover:border-white/20 hover:text-white"
                }`}
              >
                DAY {day}
              </button>

            ))}

          </div>


          {/* Selected day */}

          <AnimatePresence mode="wait">

            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-8"
            >

              <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">

                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                      Day {selectedDay}
                    </p>

                    <h4 className="mt-2 text-xl font-medium">
                      {selectedDay === 1
                        ? "Arrive & slow down"
                        : selectedDay === 2
                        ? "Into the mountains"
                        : selectedDay === 3
                        ? "Views worth the climb"
                        : selectedDay === 4
                        ? "A day off the map"
                        : "One last adventure"}
                    </h4>

                  </div>

                  <span className="rounded-full bg-white/[0.05] px-3 py-1.5 text-[10px] text-white/35">
                    {vibe}
                  </span>

                </div>


                {/* Activities */}

                <div className="mt-7 space-y-0">

                  {[
                    {
                      time: "09:00",
                      title: "Start the morning",
                      detail: "Breakfast & a slow walk through town",
                    },
                    {
                      time: "11:30",
                      title:
                        selectedDay === 2
                          ? "Triund trail"
                          : "Explore the surroundings",
                      detail:
                        selectedDay === 2
                          ? "Mountain trail · 9 km"
                          : "Local spots worth discovering",
                    },
                    {
                      time: "16:30",
                      title: "Golden hour",
                      detail: "Find a viewpoint and stay for sunset",
                    },
                    {
                      time: "20:00",
                      title: "Dinner",
                      detail: "Local food · no reservations needed",
                    },
                  ].map((activity, index) => (

                    <div
                      key={activity.time}
                      className="flex gap-5 border-b border-white/[0.06] py-5 last:border-0"
                    >

                      <span className="w-12 shrink-0 text-[10px] text-white/25">
                        {activity.time}
                      </span>

                      <div className="relative flex-1">

                        <p className="text-sm font-medium">
                          {activity.title}
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-white/30">
                          {activity.detail}
                        </p>

                      </div>

                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.07] text-[9px] text-white/25">
                        {index + 1}
                      </div>

                    </div>

                  ))}

                </div>

              </div>


              {/* Bottom cards */}

              <div className="mt-4 grid grid-cols-2 gap-3">

                <div className="rounded-2xl border border-white/[0.07] p-5">

                  <p className="text-[9px] uppercase tracking-wider text-white/25">
                    Travel style
                  </p>

                  <p className="mt-2 text-sm">
                    {vibe}
                  </p>

                </div>

                <div className="rounded-2xl border border-white/[0.07] p-5">

                  <p className="text-[9px] uppercase tracking-wider text-white/25">
                    Pace
                  </p>

                  <p className="mt-2 text-sm">
                    Balanced
                  </p>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

    </motion.div>


    {/* Caption */}

    <div className="mt-6 flex flex-col justify-between gap-3 text-[10px] uppercase tracking-[0.18em] text-white/25 sm:flex-row">

      <span>01 — Generated itinerary</span>

      <span>Interactive preview</span>

    </div>

  </div>
</section>
{/* ===================================================== */}
{/* STORY SECTION */}
{/* ===================================================== */}

<section
  id="story"
  className="relative overflow-hidden border-t border-white/[0.06] px-5 py-40 sm:px-8 sm:py-56"
>
  {/* Ambient glow */}
  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.12, 0.2, 0.12],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[140px]"
  />

  <div className="relative mx-auto max-w-[1200px]">

    {/* Small label */}

    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/30">
      <span className="h-px w-8 bg-white/20" />
      The TrailNotFound philosophy
    </div>


    {/* STORY */}

    <div className="mt-20 space-y-10 sm:mt-28 sm:space-y-16">

      {/* LINE 01 */}

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.075em]">
          You tell us
        </p>

        <p className="mt-2 text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.075em] text-white/20">
          where.
        </p>
      </motion.div>


      {/* LINE 02 */}

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="ml-auto max-w-4xl text-right"
      >
        <p className="text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.075em]">
          We figure out
        </p>

        <p className="mt-2 text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.075em] text-white/20">
          how.
        </p>
      </motion.div>


      {/* LINE 03 */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="pt-8 sm:pt-16"
      >
        <p className="text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.075em]">
          You just
        </p>

        <div className="mt-3 flex items-center gap-5">
          <span className="text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.82] tracking-[-0.075em] text-white/20">
            go.
          </span>

          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white text-black sm:flex"
          >
            <ArrowRight size={22} />
          </motion.div>
        </div>
      </motion.div>

    </div>


    {/* Bottom message */}

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="mt-28 max-w-md border-l border-white/15 pl-5 sm:mt-36"
    >
      <p className="text-sm leading-7 text-white/40">
        Because planning a trip shouldn't become the trip itself.
      </p>
    </motion.div>

  </div>
</section>


{/* ===================================================== */}
{/* FINAL CTA */}
{/* ===================================================== */}

<section className="px-5 pb-32 sm:px-8 sm:pb-40">

  <div className="relative mx-auto min-h-[600px] max-w-[1200px] overflow-hidden rounded-[32px]">

    {/* Background */}

    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=2000&q=90')",
      }}
    />

    <div className="absolute inset-0 bg-black/45" />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />


    {/* CTA CONTENT */}

    <div className="relative flex min-h-[600px] flex-col items-center justify-end px-6 pb-16 text-center sm:pb-20">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >

        <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
          Your next chapter
        </p>

        <h2 className="mx-auto mt-5 max-w-4xl text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.85] tracking-[-0.07em]">
          Where will
          <br />
          you go next?
        </h2>

        <p className="mx-auto mt-7 max-w-md text-sm leading-6 text-white/55">
          Pick a place. Give us a few details.
          <br className="hidden sm:block" />
          We'll help you find the trail.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("planner")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#f4f2eb] px-7 py-4 text-sm font-semibold text-black transition hover:scale-105"
        >
          Find my trail

          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>

      </motion.div>

    </div>

  </div>

</section>

      {/* ===================================================== */}
      {/* HOW IT WORKS */}
      {/* ===================================================== */}

      <section
        id="how"
        className="border-t border-white/[0.06] px-5 py-32 sm:px-8 sm:py-40"
      >

        <div className="mx-auto max-w-[1200px]">

          <p className="text-xs uppercase tracking-[0.25em] text-white/35">
            How it works
          </p>

          <div className="mt-6 grid gap-16 lg:grid-cols-2">

            <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl">
              From
              <br />
              <span className="text-white/35">
                “where?”
              </span>
              <br />
              to
              <br />
              “let's go.”
            </h2>

            <div className="space-y-0">

              {[
                [
                  "01",
                  "Tell us your trip",
                  "Destination, days, budget and the kind of experience you want.",
                ],
                [
                  "02",
                  "We build the route",
                  "TrailNotFound turns those inputs into a practical day-by-day plan.",
                ],
                [
                  "03",
                  "You just go",
                  "Save the plan, tweak it, and take it with you.",
                ],
              ].map(([number, title, text]) => (

                <div
                  key={number}
                  className="group flex gap-6 border-b border-white/[0.07] py-8"
                >

                  <span className="text-xs text-white/25">
                    {number}
                  </span>

                  <div>

                    <h3 className="text-xl font-medium">
                      {title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-white/35">
                      {text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* DISCOVER */}
      {/* ===================================================== */}

      <section
        id="discover"
        className="px-5 pb-32 sm:px-8 sm:pb-40"
      >

        <div className="mx-auto max-w-[1200px]">

          <p className="text-xs uppercase tracking-[0.25em] text-white/35">
            Don't know where?
          </p>

          <h2 className="mt-5 text-5xl font-medium tracking-[-0.055em] sm:text-7xl">
            Maybe somewhere
            <br />
            <span className="text-white/35">
              worth getting lost in.
            </span>
          </h2>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">

            {[
              {
                name: "Himachal",
                image:
                  "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=1000&q=85",
              },
              {
                name: "Uttarakhand",
                image:
                  "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=85",
              },
              {
                name: "Kashmir",
                image:
                  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",
              },
            ].map((place) => (

              <div
                key={place.name}
                className="group relative h-[430px] overflow-hidden rounded-[26px]"
              >

                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${place.image}')`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                      Explore
                    </p>

                    <h3 className="mt-2 text-2xl font-medium">
                      {place.name}
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md transition group-hover:bg-white group-hover:text-black">
                    <ArrowRight size={16} />
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <footer className="border-t border-white/[0.06] px-5 py-8 sm:px-8">

        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-xs text-white/30 sm:flex-row">

          <div className="flex items-center gap-2">
            <Mountain size={14} />
            TrailNotFound
          </div>

          <p>
            Made for people who'd rather be outside.
          </p>

          <p>
            © 2026 TrailNotFound
          </p>

        </div>

      </footer>

    </main>
  );
}