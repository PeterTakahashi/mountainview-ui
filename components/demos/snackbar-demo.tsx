"use client";

import { Button } from "@/registry/mountainview-ui/button";
import { snackbar, Snackbars } from "@/registry/mountainview-ui/snackbar";

export default function SnackbarDemo() {
  return (
    <>
      <Snackbars />
      <div className="flex gap-3">
        <Button
          variant="tonal"
          onClick={() =>
            snackbar({ message: "Photo archived", actionLabel: "Undo" })
          }
        >
          Archive
        </Button>
        <Button
          variant="outlined"
          onClick={() =>
            snackbar({ message: "Can't connect. Retrying in 5 s…", closable: true })
          }
        >
          Offline
        </Button>
      </div>
    </>
  );
}
