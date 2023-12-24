import { NavigationMenu } from "@/components/custom/navigation-menu";
import { Features } from "@/sections/features";
import { HeroBanner } from "@/sections/hero-banner";
import { Pricing } from "@/sections/pricing";

export default function Home() {
  return (
    <main>
      <NavigationMenu />
      <HeroBanner />
      <Features />
      <Pricing />
    </main>
  );
}
