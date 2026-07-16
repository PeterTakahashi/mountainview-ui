"use client";

import {
  SegmentedButton,
  SegmentedButtonItem,
} from "@/registry/mountainview-ui/segmented-button";

export default function SegmentedButtonDemo() {
  return (
    <SegmentedButton type="single" defaultValue="week" className="w-full max-w-sm">
      <SegmentedButtonItem value="day">Day</SegmentedButtonItem>
      <SegmentedButtonItem value="week">Week</SegmentedButtonItem>
      <SegmentedButtonItem value="month">Month</SegmentedButtonItem>
    </SegmentedButton>
  );
}
