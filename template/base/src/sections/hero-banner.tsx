import { Container } from "@/components/custom/container";
import { Button } from "@/components/ui/button";
import React from "react";

export const HeroBanner: React.FC = () => {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col place-items-center justify-center gap-3 ">
        <p className="text-7xl">Headline</p>
        <p className="w-[600px] text-center text-neutral-500">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <Button> Get Started </Button>
      </div>
    </Container>
  );
};
