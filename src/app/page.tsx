import ParticleProvider from "@/app/(layout)/particle-provider";

export default function HomePage() {
  return (
    <div className="bg-secondary">
      <ParticleProvider>
        <>
          <div className="mt-10 flex justify-center">
            <h1>WILL SATHER</h1>
          </div>

          <div className="mt-5 flex justify-center">
            <h2>building software.</h2>
          </div>
        </>
      </ParticleProvider>
    </div>
  );
}
