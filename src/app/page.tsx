import HeroSection from "@/components/Hero";
import OverviewCompany from "@/components/Overview";


export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center">
      <HeroSection />
      <OverviewCompany />
    </main>
  );
}
