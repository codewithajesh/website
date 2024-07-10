import BlogDetails from "@/components/Blogs/BlogDetails";
import HeroSection from "@/components/Hero/HeroSection";
import { ProjectDetails } from "@/components/Project/ProjectDetails";
import ToolSection from "@/components/Tools/ToolsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectDetails />
      <BlogDetails />
      <ToolSection />

    </main>
  );
}
