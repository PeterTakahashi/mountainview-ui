import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge the M3 type-scale utilities so `text-title-m`
// (a font-size) never collides with `text-on-primary` (a color).
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-l", "display-m", "display-s",
            "headline-l", "headline-m", "headline-s",
            "title-l", "title-m", "title-s",
            "body-l", "body-m", "body-s",
            "label-l", "label-m", "label-s",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
