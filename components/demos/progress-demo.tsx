"use client";

import * as React from "react";
import { CircularProgress, Progress } from "@/registry/mountainview-ui/progress";

export default function ProgressDemo() {
  const [value, setValue] = React.useState(20);

  React.useEffect(() => {
    const timer = setTimeout(() => setValue(72), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-72 flex-col items-center gap-8">
      <Progress value={value} />
      <CircularProgress />
    </div>
  );
}
