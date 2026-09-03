import GalaxyScene from "../components/GalaxyScene";

export default function HomePage() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">

      <GalaxyScene />

      <div className="absolute left-[-350px] top-1/2 h-[1000px] w-[1000px] -translate-y-1/2 rounded-full bg-orange-500/10 blur-[250px]" />

      <div className="absolute right-[-350px] top-1/2 h-[1000px] w-[1000px] -translate-y-1/2 rounded-full bg-violet-500/10 blur-[250px]" />

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-white text-7xl md:text-8xl font-bold">
          
        </h1>

        <p className="text-zinc-300 mt-4 text-xl">
          
        </p>
      </div>

    </main>
  );
}