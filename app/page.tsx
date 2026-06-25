import type { Metadata } from "next";
import { Hero } from "@/sections/Hero";
import { AboutAmal } from "@/sections/AboutAmal";
import { Services } from "@/sections/Services";
import { Offers } from "@/sections/Offers";
import { VideoShowcase } from "@/sections/VideoShowcase";
import { Testimonials } from "@/sections/Testimonials";
import { BlogPreview } from "@/sections/BlogPreview";
import { SocialContact } from "@/sections/SocialContact";
import { Location } from "@/sections/Location";
import { SEO_DESCRIPTION, SEO_TITLE } from "@/lib/seo";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutAmal />
      <Services />
      <Offers />
      <VideoShowcase />
      <Testimonials />
      <BlogPreview />
      <SocialContact />
      <Location />
    </>
  );
}
