import React from "react";
import { Container } from "@/components/custom/container";
import {
  LockIcon,
  CogIcon,
  LinkIcon,
  Signal,
  UserIcon,
  DatabaseIcon,
  BarChartIcon,
  HelpCircle,
  DollarSignIcon,
  SmileIcon,
} from "lucide-react";

type Features = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Features[] = [
  {
    title: "Security",
    description: "Including privacy and GDPR compliance",
    icon: <LockIcon />,
  },
  {
    title: "Scalability",
    description: "Ability to integrate with other SaaS offerings",
    icon: <Signal />,
  },
  {
    title: "Interoperability",
    description:
      "Ensures seamless operation with existing SaaS and on-premises applications",
    icon: <LinkIcon />,
  },
  {
    title: "Identity Management",
    description: "Managing user access and authorization efficiently",
    icon: <UserIcon />,
  },
  {
    title: "Redundancy",
    description: "Enterprise-level backup, recovery, and redundancy",
    icon: <DatabaseIcon />,
  },
  {
    title: "Configurability",
    description:
      "Highly configurable to support unique processes of users' organizations",
    icon: <CogIcon />,
  },
  {
    title: "Analytics",
    description: "Exposes performance of processes within the SaaS application",
    icon: <BarChartIcon />,
  },
  {
    title: "Ease of Use",
    description: "User-friendly interface and easy setup process",
    icon: <SmileIcon />,
  },
  {
    title: "Customer Service",
    description: "High-quality customer service to support users",
    icon: <HelpCircle />,
  },
  {
    title: "Pricing Flexibility",
    description: "Various pricing options to suit different user needs",
    icon: <DollarSignIcon />,
  },
];

export const Features: React.FC = () => {
  return (
    <Container>
      <p className="text-center text-5xl font-bold">Features</p>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          return (
            <div key={feature.title} className="group flex flex-col gap-3 p-5">
              <div className="flex gap-3">
                <span className="rounded-md bg-purple-50 p-2 text-purple-500">
                  {" "}
                  {feature.icon}{" "}
                </span>
                <span className="pt-2 font-semibold transition-colors duration-300 group-hover:text-purple-500">
                  {" "}
                  {feature.title}{" "}
                </span>
              </div>
              <p className="text-gray-500"> {feature.description} </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
