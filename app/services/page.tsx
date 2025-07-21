import ServiceCard from "./components/ServiceCard";
import { services } from "@/app/data/services";

export const metadata = {
  title: "Our Services – Hardcore Biometric Systems",
};

export default function ServicesPage() {
  return (
    <main className="container mx-auto  py-24">
      <h1 className="mt-10 text-center text-4xl font-bold">Core Services</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((svc) => (
          <ServiceCard key={svc.slug} service={svc} />
        ))}
      </div>
    </main>
  );
}
