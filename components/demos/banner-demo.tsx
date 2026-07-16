"use client";

import { CloudOffIcon, ShieldAlertIcon } from "lucide-react";
import { Banner } from "@/registry/mountainview-ui/banner";
import { Button } from "@/registry/mountainview-ui/button";

export default function BannerDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Banner
        icon={<CloudOffIcon />}
        actions={
          <>
            <Button variant="text" size="sm">Dismiss</Button>
            <Button variant="text" size="sm">Retry</Button>
          </>
        }
      >
        You&apos;re offline. Showing saved results.
      </Banner>
      <Banner variant="error" icon={<ShieldAlertIcon />} actions={<Button variant="text" size="sm">Review</Button>}>
        Unusual sign-in detected on a new device.
      </Banner>
    </div>
  );
}
