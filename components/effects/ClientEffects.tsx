"use client";

import dynamic from "next/dynamic";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { FloatingWhatsApp } from "@/components/effects/FloatingWhatsApp";

const MouseGlow = dynamic(
  () => import("@/components/effects/MouseGlow").then((m) => m.MouseGlow),
  { ssr: false }
);
const BackgroundOrbs = dynamic(
  () => import("@/components/effects/BackgroundOrbs").then((m) => m.BackgroundOrbs),
  { ssr: false }
);
const LuxuryCursor = dynamic(
  () => import("@/components/effects/LuxuryCursor").then((m) => m.LuxuryCursor),
  { ssr: false }
);
const HostessLoader = dynamic(
  () => import("@/components/hostess/HostessLoader").then((m) => m.HostessLoader),
  { ssr: false, loading: () => null }
);

export function ClientEffects() {
  return (
    <>
      <LoadingScreen />
      <MouseGlow />
      <BackgroundOrbs />
      <FloatingWhatsApp />
      <HostessLoader />
      <LuxuryCursor />
    </>
  );
}
