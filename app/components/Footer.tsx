import contactInfo from "../data/contactInfo";
import FooterLogo from "./FooterLogo";
export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto container py-6 ">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
          <div className="flex items-center gap-3">
            <FooterLogo />
          </div>

          <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
            {contactInfo.map(({ label, value, icon: Icon, href }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon size={18} className="mt-0.5 text-primary" />
                {href ? (
                  <a href={href} className="hover:underline">
                    {value}
                  </a>
                ) : (
                  <p>{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-primary pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Hardcore Biometric Systems. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
