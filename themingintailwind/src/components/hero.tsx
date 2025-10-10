import React from "react";

export const Hero = () => {
  return (
    <div className="my-40 flex w-full flex-col items-center justify-center">
      <h1 className="max-w-2xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-7xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the power of intuitive finance
      </h1>
      <p className="mx-auto mt-10 max-w-3xl text-center text-xl text-neutral-300 selection:bg-amber-300 selection:text-neutral-900">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
      </p>
    </div>
  );
};
