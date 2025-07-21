import CompletedProjectsGallery, {
  OtherCompletedProjectsSection,
} from "./components/CompletedProjectsGallery";

export default function ProjectsPage() {
  return (
    <>
      <CompletedProjectsGallery />
      <OtherCompletedProjectsSection />
    </>
  );
}
