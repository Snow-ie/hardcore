"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import clsx from "clsx";

export type ContactLocationProps = {
  name?: string;
  mapImgSrc?: string;
  mapEmbedSrc?: string;
  className?: string;
};

const FALLBACK_IMG = "/images/map-placeholder.jpg";
const BIZ_NAME = "Hardcore Biometric Systems";

export default function ContactLocation({
  name = BIZ_NAME,
  mapImgSrc = FALLBACK_IMG,
  mapEmbedSrc,
  className = "",
}: ContactLocationProps) {
  return (
    <div
      className={clsx(
        "flex w-full flex-col overflow-hidden rounded-2xl bg-background shadow-xl",
        "ring-1 ring-gray-200 ",
        className
      )}
    >
      <h3 className="bg-gradient-to-r from-primary/5 to-accent/5 py-2 text-center text-sm font-semibold tracking-wide text-foreground">
        Visit&nbsp;/&nbsp;Contact
      </h3>

      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-xl
                  border border-gray-300 "
      >
        {mapEmbedSrc ? (
          <iframe
            title={`${name} location map`}
            src={mapEmbedSrc}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        ) : (
          <>
            <Image
              src={mapImgSrc}
              fill
              alt={`${name} map`}
              sizes="(min-width:1024px) 480px, 100vw"
              className="object-cover"
              priority
            />
            <MapPin className="absolute inset-0 m-auto h-10 w-10 text-primary drop-shadow-md" />
          </>
        )}
      </div>
    </div>
  );
}
