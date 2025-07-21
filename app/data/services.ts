export interface Service {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
}

export const services: Service[] = [
  {
    slug: "software-engineering",
    title: "Software Engineering",
    excerpt:
      "Bespoke biometric software – facial, fingerprint, iris, voice, MFA and more.",
    image: "/images/software-engineering.png", // your 3rd image
    content: `
  ### Custom Biometric Software Development
  - **Facial Recognition Systems:** Advanced AI‑powered real‑time identification, access control and surveillance.
  - **Fingerprint Recognition Systems:** Secure time‑&‑attendance and identity verification.
  - **Iris & Retina Scan Solutions:** High‑precision authentication for critical security zones.
  - **Voice Recognition Modules:** Convenient, remote biometric verification.
  - **Multi‑Factor Authentication (MFA):** Combine biometrics with other factors for maximum protection.
  - **Palm Print Authentication:** Accurate ID using palm patterns.
  
  ### Biometric Mobile Applications
  - Secure mobile payment authentication
  - Biometric app locks
  - Fast login for any mobile app
  
  ### Biometric Data Management & Integration
  - Secure database integration
  - Robust encrypted storage
  - Custom APIs for interoperability
  
  ### Biometric Surveillance & QA
  - Live face surveillance, object tracking
  - PAD / deep‑fake resistance testing
  `,
  },
  {
    slug: "enterprise-solutions",
    title: "Enterprise Solutions",
    excerpt:
      "Transforming operations with access‑control, IdM, visitor management, analytics and sector‑specific biometrics.",
    image: "/images/enterprise.png", // your 1st image
    content: `
  ### Access Control & Security
  - Biometric door locks
  - Unified physical + logical access
  - Visitor management
  - Time & attendance
  
  ### Identity & Access Management
  - Biometric‑centric IdM strategy
  - SSO with biometrics
  - Automated provisioning/de‑provisioning
  
  ### Industry‑Specific Applications
  - **Law‑enforcement & Public Safety**
  - **Banking & Finance**
  - **Healthcare**
  - **Retail**
  - **Government & Workforce Management**
  
  ### Integration Services
  - Legacy system bridges
  - Third‑party (smart‑card, HR, POS, finance) integration
  - Custom infra design
  `,
  },
  {
    slug: "it-consultancy",
    title: "IT Consultancy",
    excerpt:
      "Strategic guidance, architecture, project management and compliance for biometric initiatives.",
    image: "/images/biometric-fingerprint.png",
    content: `
  ### Technology Assessment
  - Needs & feasibility studies
  - Regulatory & data‑privacy analysis
  
  ### Architecture & Deployment
  - Robust, scalable, secure system blueprints
  - Cloud / on‑prem advisory
  - Hands‑on deployment support
  
  ### Project Management
  - Full life‑cycle oversight
  - Budget & risk management
  
  ### Security & Compliance
  - GDPR / HIPAA / NIST / ISO guidance
  - Threat & risk assessments
  
  ### Digital Transformation
  - Road‑mapping
  - Process optimisation
  - User training & ongoing support
  `,
  },
];
