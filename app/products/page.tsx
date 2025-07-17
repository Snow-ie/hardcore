import { SecurityFeatures } from "./components/SecurityFeature";
import { ProductHero } from "./components/ProductHero";
import { CredentialProducts } from "./components/CredientalProducts";

export default function ProductsPage() {
  return (
    <>
      <ProductHero
        title="Secure Identity & Credential Products"
        subtitle="Biometric passports, national ID solutions, and secure credential systems built for scale."
        bgSrc="/images/nigeria-passport.jpg"
        align="center"
        minHeightClass="min-h-[40vh] md:min-h-[60vh]"
      />
      <CredentialProducts />
      <SecurityFeatures />
    </>
  );
}
