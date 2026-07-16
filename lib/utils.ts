import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * The M3 type-scale utilities (text-display-l … text-label-s) must be
 * registered as font-size classes, otherwise tailwind-merge treats
 * them as text colors and drops them when combined with e.g.
 * `text-on-surface`.
 */
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
