import React from "react";

interface injectedProps {}

const InizioHero: React.FC<injectedProps> = ({}) => {
  return (
    <div className="relative isolate mx-auto py-16 px-8 flex flex-col items-center">
        <div
            className="absolute left-0 top-0 -z-10 transform-gpu sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-34rem)]"
            aria-hidden="true"
        >
            <div className="opacity-50 bg-[url('/public/hero-gradient-bg.png')] w-[79rem] aspect-[905/632] bg-contain bg-center bg-no-repeat" />
        </div>

        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(84,101,253,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>

            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-[#181C1E] py-0.5 px-4 ring-1 ring-white/10">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5465FF] to-[#0DB9B9]">{`Worked at Inizio |`}</span>
                <span>{`See open the website`}</span>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    ></path>
                </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-[#0DB9B9] to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>

        <h1 className="font-semibold text-2xl sm:text-5xl py-6 text-white">
            Working as
            <span className="ml-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5465FF] from-5% to-[#0fd5d5] ">
            UX / UI Designer
            </span>
        </h1>

        <div className="text-gray-500 text-sm font-medium max-w-3xl mt-6">
            Feb. 2023 - Present
            <p className="text-gray-400 text-base">
            Crafting a website design to empower users in shaping their ideas into
            concrete projects. Fueled by AI, this service accelerates the journey,
            effortlessly translating concepts into deployable solutions,
            streamlining the path from idea to delivery.
            </p>
        </div>
    </div>
  );
};

export default InizioHero;
