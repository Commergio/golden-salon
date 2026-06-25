import type { Metadata } from "next";
import { LuxuryNotFound } from "@/components/pages/LuxuryNotFound";

export const metadata: Metadata = {
  title: "الصفحة غير موجودة",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <LuxuryNotFound />;
}
