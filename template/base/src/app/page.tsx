import { NavigationMenu } from "@/components/custom/navigation-menu";
import { HeroBanner } from "@/sections/hero-banner";

export default function Home() {
  return (
    <main className="w-screen">
      <NavigationMenu />
      <HeroBanner />
    </main>
  );
}
