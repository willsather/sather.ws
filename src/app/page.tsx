import ParticleProvider from "@/src/app/(layout)/particleProvider";

export default function HomePage() {
  return (
    <div className="bg-secondary">
      <ParticleProvider>
        <>
          <div className="mt-10 flex justify-center">
            <h1>WILL SATHER</h1>
          </div>

          <div className="mt-5 flex justify-center">
            <h2>livin&apos; the dream.</h2>
          </div>
        </>
      </ParticleProvider>
    </div>
  );
}
