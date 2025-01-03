import HomeBanner from "@/components/home/Home-banner";
import HomeShowcase from "@/components/home/Home-showcase";
import HomeCollections from "@/components/home/Home-Collections";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeShowcase />
      <HomeCollections />
    </div>
  );
}
