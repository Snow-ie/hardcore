import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type LogoProps = {
  className?: string;
};

export default function FooterLogo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className={clsx("flex", className)}
    >
      <Image
        src="/assets/hcb-Logo.svg"
        alt="Hardcore Biometric icon"
        width={80}
        height={80}
        priority
        className="pointer-events-none select-none"
      />
    </Link>
  );
}
