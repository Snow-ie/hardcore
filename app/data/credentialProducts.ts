export type CredentialProduct = {
  title: string;
  img: string;
  imgAlt?: string;
  summary: string;
  bullets?: string[];
};

export const CREDENTIAL_PRODUCTS: CredentialProduct[] = [
  {
    title: "Biometric ID Card",
    img: "/images/nigeria-id-card.jpg",
    imgAlt: "Sample biometric national ID card",
    summary: "Includes security features",
    bullets: ["Residence permits", "Police Cards"],
  },
  {
    title: "Driver's Licence",
    img: "/images/nigeria-driver-licence.png",
    imgAlt: "Sample national driver's licence",
    summary: "National Driver's licence",
  },
  {
    title: "Visas and Stamps",
    img: "/images/visa-specimen.png",
    imgAlt: "Sample visa page with stamp",
    summary: "Traveler Visas and Excise stamps",
    bullets: ["Excise stamps", "Visas"],
  },
];
