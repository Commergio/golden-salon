"use client";

import dynamic from "next/dynamic";

const HostessAssistant = dynamic(
  () =>
    import("./HostessAssistant").then((m) => ({ default: m.HostessAssistant })),
  { ssr: false, loading: () => null }
);

export function HostessLoader() {
  return <HostessAssistant />;
}
