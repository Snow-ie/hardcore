import HeroCarousel from "@/app/components/HeroCarousel";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold">Secure Identity Solutions</h2>
        <p className="mt-4 text-gray-600">
          Trusted by governments and enterprises worldwide.
        </p>
      </section>
    </>
  );
}
