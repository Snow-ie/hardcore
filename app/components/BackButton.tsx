"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/services")}
      className="mt-20 inline-flex items-center rounded-full border border-primary px-6 py-2 text-sm font-semibold text-primary hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
    >
      <ChevronLeft className="mr-2 h-4 w-4" />
      Back to Services
    </button>
  );
}
