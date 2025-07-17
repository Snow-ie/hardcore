import type { ComponentType, SVGProps } from "react";
import { Cpu, Barcode, SunMedium, Hash, ScanLine, Droplet } from "lucide-react";

export type FeatureIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type SecurityFeature = {
  title: string;
  description: string;
  icon?: FeatureIcon;
  imgSrc?: string;
  imgAlt?: string;
};

export const SECURITY_FEATURES: SecurityFeature[] = [
  {
    title: "Electronic chip",
    description: "Biometric data is stored in an embedded microchip.",
    icon: Cpu,
  },
  {
    title: "PDF 417 bar-code",
    description:
      "PDF417 is the standard machine-readable zone format for compliant IDs.",
    icon: Barcode,
  },
  {
    title: "UV ink",
    description:
      "Digital printing that reveals security marks only under UV light.",
    icon: SunMedium,
  },
  {
    title: "Serial Number",
    description:
      "Unique identifier assigned incrementally or sequentially to each document.",
    icon: Hash,
  },
  {
    title: "Hologram",
    description:
      "Optically variable image that shifts with light to deter counterfeiting.",
    icon: ScanLine,
  },
  {
    title: "Optically variable ink",
    description:
      "Color-shifting ink used in secure documents and modern banknotes.",
    icon: Droplet,
  },
];
