export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="m-auto flex flex-col gap-4 sm:max-w-sm max-w-xs transition-all duration-300">
        <div className="flex flex-col gap-2 text-white w-full text-center">
          <div className="sm:text-7xl text-5xl transition-all duration-300 font-bold"><span>Breaking</span></div>
          <div className="sm:text-7xl text-5xl transition-all duration-300 font-bold"><span>Bad</span></div>
        </div>
        <div className="flex sm:flex-row flex-col gap-y-2">
          <div className="flex flex-col gap-2 sm:w-1/2 w-full px-2">
            <label htmlFor="firstName" className="text-white">First Name</label>
            <input id="firstName" type="text" className="rounded-sm px-2 py-1" />
          </div>
          <div className="flex flex-col gap-2 sm:w-1/2 w-full px-2">
            <label htmlFor="lastName" className="text-white">Last Name</label>
            <input id="lastName" type="text" className="rounded-sm px-2 py-1" />
          </div>
        </div>
        <div className="bg-greenButton min-h-[40px] min-w-[320px] w-full rounded-lg cursor-pointer  active:bg-greenElement flex self-center items-center justify-center text-white">
          Breakify
        </div>
      </div>
    </main>
  );
}
