import { defineConfig } from "@mdreal/ui-kit/server";

import { palette } from "./palette";

export const baseConfig = defineConfig({
  colors(_colors) {
    return {};
  },
  palette,
  extra: {
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        fontSize: {
          "1.5xl": "1.375rem"
        },
        animation: {
          spin: "spin 1s linear infinite"
        },
        keyframes: {
          spin: { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } }
        },
        borderRadius: {
          "2.25xl": "1.125rem"
        }
      }
    }
  }
});
