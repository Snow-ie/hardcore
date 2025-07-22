"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export type ProjectCard = {
  id: string;
  title: string;
  description: string;
  img: string;
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
  // {
  //   id: "cyber-crime-3",
  //   title: "Cyber Crime Lab",
  //   description: "State‑of‑the‑art digital forensics facility for NPF.",
  //   img: "/projects/cyber-crime-3.png",
  // },
  {
    id: "fusion-center-1",
    title: "Fusion Center",
    description: "Integrated command & control hub for rapid response.",
    img: "/projects/fusion-center-1.png",
  },
  {
    id: "fusion-center-2",
    title: "Fusion Center",
    description: "Integrated command & control hub for rapid response.",
    img: "/projects/fusion-center-2.png",
  },
  // {
  //   id: "fusion-center-3",
  //   title: "Fusion Center",
  //   description: "Integrated command & control hub for rapid response.",
  //   img: "/projects/fusion-center-3.png",
  // },
  {
    id: "police-trainings-1",
    title: "Police Trainings",
    description: "Nation‑wide biometric & cybersecurity training modules.",
    img: "/projects/police-trainings-1.png",
  },
  {
    id: "police-trainings-2",
    title: "Police Trainings",
    description: "Nation‑wide biometric & cybersecurity training modules.",
    img: "/projects/police-trainings-2.png",
  },
  {
    id: "police-trainings-3",
    title: "Police Trainings",
    description: "Nation‑wide biometric & cybersecurity training modules.",
    img: "/projects/police-trainings-3.png",
  },
];

export default function CompletedProjectsGallery() {
  return (
    <section className="py-20">
      <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-primary">
        Completed Projects
      </h2>

      <div className="relative px-4 pb-16 sm:px-8 xl:px-0">
        <Swiper
          className="mySwiper mx-auto w-full max-w-3xl"
          modules={[Pagination, Navigation, Autoplay, Keyboard]}
          pagination={{ type: "progressbar" }}
          navigation
          autoplay={{ delay: 4500, pauseOnMouseEnter: true }}
          keyboard={{ enabled: true }}
          slidesPerView={1}
          spaceBetween={0}
        >
          {imageProjects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-black/10 dark:ring-white/10"
            >
              <Image
                src={project.img}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 z-10 bg-black/60 p-4 backdrop-blur-sm text-white">
                <h3 className="text-base font-semibold">{project.title}</h3>
                <p className="mt-0.5 text-xs opacity-90">
                  {project.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
