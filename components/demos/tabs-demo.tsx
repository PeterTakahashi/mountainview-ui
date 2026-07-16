"use client";

import { PlaneIcon, TrainIcon, CarIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/mountainview-ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="flights" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="flights">
          <PlaneIcon /> Flights
        </TabsTrigger>
        <TabsTrigger value="trains">
          <TrainIcon /> Trains
        </TabsTrigger>
        <TabsTrigger value="cars">
          <CarIcon /> Cars
        </TabsTrigger>
      </TabsList>
      <TabsContent value="flights" className="text-body-m text-on-surface-variant">
        Search hundreds of airlines.
      </TabsContent>
      <TabsContent value="trains" className="text-body-m text-on-surface-variant">
        Rail routes and schedules.
      </TabsContent>
      <TabsContent value="cars" className="text-body-m text-on-surface-variant">
        Rentals near you.
      </TabsContent>
    </Tabs>
  );
}
