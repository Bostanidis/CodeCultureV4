import GymAboutUs from "@/components/gym/GymAboutUs";
import GymHeader from "@/components/gym/GymHeader";
import GymHeroSection from "@/components/gym/GymHeroSection";

export default function GymTemplate() {
  return (
    <>
      <GymHeader />
      <GymHeroSection />
      <GymAboutUs />
      {/* Add other sections below */}
    </>
  );
}
