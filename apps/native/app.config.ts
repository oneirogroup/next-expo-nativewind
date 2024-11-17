import { ExpoConfig } from "expo/config";
import "ts-node/register";

import { version } from "./package.json";

export default {
  name: "Expo Next Template",
  slug: "expo-next-template",
  scheme: "expo-next-template",
  version,
  orientation: "portrait",
  icon: "./assets/images/logo.png",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  splash: {
    image: "./assets/images/logo.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  android: {
    package: "com.mdreal.expo-next-template"
  },
  ios: {
    supportsTablet: true
  },
  plugins: ["expo-router", "expo-font"],
  experiments: {
    typedRoutes: true,
    reactCompiler: true
  }
} satisfies ExpoConfig;
