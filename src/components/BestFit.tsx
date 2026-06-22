import React from 'react';

const bestFitItems = [
  'IT service / products businesses with a minimum 10 employees, that want more clients and need a predictable pipeline.',
  'Teams seeking a predictable sales pipeline, not referrals.',
  'Companies ready to build scalable sales processes',
];

const notFitItems = [
  'Teams expecting instant results without investment.',
  'Businesses looking for "magic tricks".',
  'Companies under 10 people or $100,000 revenue.',
];

export default function BestFit() {
  return (
    <section className="relative overflow-hidden bg-transparent pb-24 sm:pb-32">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div
            className="bg-light relative min-h-[256px] p-8 shadow-2xl sm:p-10 lg:col-span-7 lg:min-h-[288px] lg:p-12"
          >
            <h2 className="mb-8 font-sans text-3xl font-extrabold uppercase tracking-tight text-white sm:text-[34px]">
              BEST FIT
            </h2>
            <ul className="m-0 flex list-disc flex-col gap-6 pl-5 text-left marker:text-white">
              {bestFitItems.map((item) => (
                <li
                  key={item}
                  className="pl-1 font-sans text-sm leading-relaxed text-white/95 sm:text-[15px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="flex flex-col justify-center px-2 py-2 text-left lg:col-span-4 lg:col-start-9 lg:px-0"
          >
            <h2 className="mb-8 font-sans text-3xl font-extrabold uppercase tracking-tight text-white sm:text-[34px]">
              NOT A FIT
            </h2>
            <ul className="m-0 flex list-disc flex-col gap-6 pl-5 marker:text-white">
              {notFitItems.map((item) => (
                <li
                  key={item}
                  className="pl-1 font-sans text-sm leading-relaxed text-white/95 sm:text-[15px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
