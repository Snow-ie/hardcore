import Logo from "./Logo";
import contactInfo from "../data/contactInfo";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto container px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-lg font-semibold tracking-tight">
              Hardcore Biometric
            </span>
          </div>

          <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
            {contactInfo.map(({ label, value, icon: Icon, href }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon size={18} className="mt-0.5 text-accent" />
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

        <div className="mt-8 border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Hardcore Biometric Systems. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
