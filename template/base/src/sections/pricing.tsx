import { Container } from "@/components/custom/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

export const Pricing: React.FC = () => {
  return (
    <Container>
      <p className="mt-10 text-center text-5xl font-semibold">Pricing</p>
      <div className="flex justify-center gap-5 pt-10">
        <Card className="flex flex-col items-center space-y-6 p-8">
          <CardHeader className="flex flex-col items-center space-y-1">
            <CardTitle className="text-2xl font-bold">Basic</CardTitle>
            <CardDescription className="text-gray-500">
              For small businesses
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-3">
            <div className="text-5xl font-bold">$29/mo</div>
            <div className="grid gap-1 text-center">
              <p className="text-gray-500">Up to 10 Users</p>
              <p className="text-gray-500">Basic Support</p>
              <p className="text-gray-500">2 GB Storage</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col items-center space-y-6 p-8">
          <CardHeader className="flex flex-col items-center space-y-1">
            <CardTitle className="text-2xl font-bold">Pro</CardTitle>
            <CardDescription className="text-gray-500">
              For medium businesses
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-3">
            <div className="text-5xl font-bold">$49/mo</div>
            <Badge className="rounded-full bg-green-500 px-3 py-1 text-sm text-white">
              Most Popular
            </Badge>
            <div className="grid gap-1 text-center">
              <p className="text-gray-500">Up to 50 Users</p>
              <p className="text-gray-500">Priority Support</p>
              <p className="text-gray-500">50 GB Storage</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </Card>
        <Card className="flex flex-col items-center space-y-6 p-8">
          <CardHeader className="flex flex-col items-center space-y-1">
            <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
            <CardDescription className="text-gray-500">
              For large businesses
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-3">
            <div className="text-5xl font-bold">Custom</div>
            <div className="grid gap-1 text-center">
              <p className="text-gray-500">Unlimited Users</p>
              <p className="text-gray-500">24/7 Support</p>
              <p className="text-gray-500">Unlimited Storage</p>
            </div>
          </CardContent>
          <CardFooter>
            <Link className="flex w-full justify-center" href="#">
              <Button>Contact Us</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </Container>
  );
};
