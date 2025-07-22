export type ProjectCard = {
  id: string;
  title: string;
  description: string;
  img: string;
};

export type OtherProject = {
  id: string;
  title: string;
  description: string;
};

export const imageProjects: ProjectCard[] = [
  {
    id: "cyber-crime-1",
    title: "Cyber Crime Lab",
    description: "State‑of‑the‑art digital forensics facility for NPF.",
    img: "/projects/cyber-crime-1.png",
  },
  {
    id: "cyber-crime-2",
    title: "Cyber Crime Lab",
    description: "State‑of‑the‑art digital forensics facility for NPF.",
    img: "/projects/cyber-crime-2.png",
  },
  {
    id: "cyber-crime-3",
    title: "Cyber Crime Lab",
    description: "State‑of‑the‑art digital forensics facility for NPF.",
    img: "/projects/cyber-crime-3.png",
  },

  {
    id: "fusion-center-1",
    title: "Fusion Center",
    description: "Integrated command & control hub for rapid response.",
    img: "/projects/fusion-center-1.png",
  },
  {
    id: "fusion-center-2",
    title: "Fusion Center",
    description: "Integrated command & control hub for rapid response.",
    img: "/projects/fusion-center-2.png",
  },
  {
    id: "fusion-center-3",
    title: "Fusion Center",
    description: "Integrated command & control hub for rapid response.",
    img: "/projects/fusion-center-3.png",
  },

  {
    id: "police-trainings-1",
    title: "Police Trainings",
    description: "Nation‑wide biometric & cybersecurity training modules.",
    img: "/projects/police-trainings-1.png",
  },
  {
    id: "police-trainings-2",
    title: "Police Trainings",
    description: "Nation‑wide biometric & cybersecurity training modules.",
    img: "/projects/police-trainings-2.png",
  },
  {
    id: "police-trainings-3",
    title: "Police Trainings",
    description: "Nation‑wide biometric & cybersecurity training modules.",
    img: "/projects/police-trainings-3.png",
  },
];

export const otherProjects: OtherProject[] = [
  {
    id: "biometric-kits",
    title: "Supply of Biometric Kits – Lagos Airport",
    description: "Live‑capture kits deployed to streamline passenger ID.",
  },
  {
    id: "training-ammo",
    title: "Purchase of Training Ammunition – NPF",
    description: "Delivered non‑lethal rounds for tactical exercises.",
  },
  {
    id: "ballistic-helmets",
    title: "Supply of Ballistic Helmets & Vests – NPF",
    description: "Advanced Level IIIA protective gear for officers.",
  },
  {
    id: "security-systems",
    title: "Security Systems Installation – Ebonyi State",
    description: "CCTV & access‑control grid for government facilities.",
  },
];
