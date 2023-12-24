import { cn } from "@/lib/utils";
import React from "react";

type Props = React.ComponentPropsWithoutRef<"div"> & {
  children?: React.ReactNode;
};

export const Container: React.FC<Props> = ({ ...props }) => {
  return (
    <div className={cn("container", props.className)} {...props}>
      {props.children}
    </div>
  );
};
