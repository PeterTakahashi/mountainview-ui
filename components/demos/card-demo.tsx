"use client";

import { Button } from "@/registry/mountainview-ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/mountainview-ui/card";

export default function CardDemo() {
  return (
    <Card className="w-80">
      <div className="m-2 h-32 rounded-sm bg-[linear-gradient(135deg,var(--primary-container),var(--tertiary-container))]" />
      <CardHeader>
        <CardTitle>Glass Souls world tour</CardTitle>
        <CardDescription>From your recent favorites</CardDescription>
      </CardHeader>
      <CardContent>
        Live in your city on October 12. Presale opens Friday at 10 AM.
      </CardContent>
      <CardFooter>
        <Button variant="text">Not now</Button>
        <Button>Get tickets</Button>
      </CardFooter>
    </Card>
  );
}
