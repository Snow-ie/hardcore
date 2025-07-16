import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className={clsx("flex items-center gap-2", className)}
    >
      <Image
        src="/assets/hcbIcon.png"
        alt="Hardcore Biometric icon"
        width={40}
        height={40}
        priority
        className="pointer-events-none select-none"
      />

      <Image
        src="/assets/hcb logo.svg"
        alt="Hardcore Biometric Systems"
        width={60}
        height={60}
        className="pointer-events-none select-none "
      />
    </Link>
  );
}
