import ParticleProvider from "@/ui/particle-provider";

export default function HomePage() {
  return (
    <div className="bg-secondary">
      <ParticleProvider>
        <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center md:gap-4">
          <h1>will sather</h1>
          <h2 className="font-mono font-normal">vibe coding.</h2>
        </div>
      </ParticleProvider>
    </div>
  );
}
