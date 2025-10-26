'use client';

import Link from 'next/link';
import MatchmakingComponent from '../components/MatchmakingComponent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">FIFA Match - Champions League Team Matching</h1>
      </div>
      
      <div className="mt-10 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left gap-6">
        <Link href="/match" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white shadow-lg">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Match Players{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find equally skilled opponents for a fair Champions League match.
          </p>
        </Link>

        <Link href="/teams" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 bg-white shadow-lg">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Team Selection{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Select from official FIFA 23 Champions League teams.
          </p>
        </Link>
      </div>
      
      {/* Matchmaking Component */}
      <div className="mt-16 w-full">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Quick Match</h2>
          <MatchmakingComponent />
        </div>
      </div>
    </main>
  );
}