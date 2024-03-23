import ParticleProvider from "@/src/app/(layout)/particleProvider";

export default function HomePage() {
  return (
    <div className="bg-secondary">
      <ParticleProvider>
        <>
          <div className="flex justify-center mt-10">
            <h1>WILL SATHER</h1>
          </div>

          <div className="flex justify-center mt-5">
            <h2>livin&apos; the dream.</h2>
          </div>
        </>
      </ParticleProvider>
    </div>
  );
}
