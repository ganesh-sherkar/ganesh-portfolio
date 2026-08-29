import { generateMetadata, getBreadcrumbSchema } from "@/lib/seo-utils";
import Resume from "@/mainPages/portfolioPages/Resume";
import Script from "next/script";
import React from "react";

export const metadata = generateMetadata({
  title: "Resume / CV",
  description:
    "View and download the resume/CV of Ganesh Sherkar, a React Native & MERN Stack Developer with 1+ years of experience. Available for freelance and full-time opportunities.",
  path: "/resume",
  keywords: [
    "Ganesh Sherkar Resume",
    "MERN Stack Developer CV",
    "Web Developer Resume Hyderabad",
    "Full Stack Developer Resume",
    "Download Developer Resume",
    "Software Developer CV",
  ],
  type: "website",
});

const page = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Resume", path: "/resume" },
  ]);

  return (
    <div>
      <Script
        id="resume-breadcrumb-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="sr-only" aria-hidden="false">
        <h1>Resume / CV - Ganesh Sherkar | React Native & MERN Stack Developer</h1>
        <p>
          View and download the professional resume of Ganesh Sherkar. Experienced React Native 
          and MERN Stack Developer with 1+ years of experience in building scalable applications.
        </p>
      </section>
      <Resume />
    </div>
  );
};

export default page;