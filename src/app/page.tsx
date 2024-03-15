'use client'
import Inputs from "./components/inputs";
import Words from "./components/words";
import StoreProvider from "./components/store-provider"

export default function Home() {
  return (
    <StoreProvider>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="m-auto flex flex-col gap-4 sm:max-w-sm max-w-xs transition-all duration-300">
          <Words />
          <Inputs />
        </div>
      </main>
    </StoreProvider>
  );
}
