"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

export type ContactLocationProps = {
  name?: string;
  addressLines?: string[];
  phone?: string;
  email?: string;
  mapImgSrc?: string;
  mapEmbedSrc?: string;
  className?: string;
};

export default function ContactLocation({
  name = "Hardcore Biometric Systems",
  mapImgSrc = "/images/map-placeholder.jpg",
  mapEmbedSrc,
  className = "",
}: ContactLocationProps) {
  return (
    <div
      className={`flex w-full flex-col overflow-hidden rounded-xl bg-white p-6 shadow-lg dark:bg-surface sm:p-8 ${className}`}
    >
      <h3 className="mb-4 text-lg font-semibold text-foreground">
        Visit / Contact
      </h3>

      <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-md border border-border">
        {mapEmbedSrc ? (
          <iframe
            src={mapEmbedSrc}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
            title={`${name} location map`}
          />
        ) : (
          <>
            <Image
              src={mapImgSrc}
              alt={`${name} map`}
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <MapPin className="h-10 w-10 text-primary drop-shadow-[0_0_4px_rgba(0,0,0,.6)]" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
