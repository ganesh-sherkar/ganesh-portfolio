import { Sora, Russo_One } from "next/font/google";
import "./globals.css";
import Header from "@/global/Header";
import Footer from "@/global/Footer";
import ScrollTop from "@/global/ScrollTop";
import ThemeProvider from "@/components/ThemeProvider";
import { Providers } from "@/components/ReduxProvider";
import CustomCursor from "@/components/CustomCursor";
import RouteTransition from "@/components/RouteTransition";
import Script from "next/script";

const BASE_URL = "https://muskunishitha.vercel.app";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-russo",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Nishitha Reddy Musku | React Native & MERN Stack Developer",
    template: "%s | Nishitha Reddy Musku",
  },

  description:
    "Portfolio of Nishitha Reddy Musku, React Native & MERN Stack Developer specializing in scalable mobile apps, web apps, and modern UI/UX.",

  keywords: [
    "Nishitha Reddy Musku",
    "React Native Developer India",
    "MERN Stack Developer",
    "Frontend Developer Portfolio",
    "React Developer Hyderabad",
  ],

  authors: [{ name: "Nishitha Reddy Musku", url: BASE_URL }],
  creator: "Nishitha Reddy Musku",
  publisher: "Nishitha Reddy Musku",

  openGraph: {
    title: "Nishitha Reddy Musku | React Native & MERN Stack Developer",
    description:
      "Explore projects, skills, and experience in React Native, MERN Stack, and frontend development. Building scalable mobile and web applications.",
    url: BASE_URL,
    siteName: "Nishitha Reddy Musku Portfolio",
    images: [
      {
        url: `${BASE_URL}/main_photo_seo.png`,
        width: 1200,
        height: 630,
        alt: "Nishitha Reddy Musku - React Native & MERN Stack Developer Portfolio",
        type: "image/png",
        secureUrl: `${BASE_URL}/main_photo_seo.png`,
      },
    ],
    locale: "en_IN",
    type: "website",
    determiner: "auto",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nishitha Reddy Musku | React Native & MERN Stack Developer",
    description:
      "Portfolio of Nishitha Reddy Musku - React Native & MERN Stack Developer building scalable apps with modern UI/UX.",
    creator: "@nishithareddy",
    site: "@nishithareddy",
    images: [`${BASE_URL}/main_photo_seo.png`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
    },
  },

  icons: {
    icon: [
      { url: "/main_photo_seo.png", sizes: "any" },
      { url: "/main_photo_seo.png", sizes: "16x16", type: "image/png" },
      { url: "/main_photo_seo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  category: "technology",

  verification: {
    google: "d0rdKhmxIWpDC4lXnL_h7Bynf697jpQDh5YzSgC2ZWo", // Add your Google Search Console code
  },

  other: {
    "facebook-domain-verification": "your-facebook-verification-code", // Optional
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${russoOne.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sora overflow-x-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Default theme-color meta tag */}
        <Script id="theme-script" strategy="afterInteractive">
          {`
    (function() {
      function updateThemeColor() {
        try {
          const isDark = document.documentElement.classList.contains('dark');
          // 🔥 Read from data-primary attribute (not localStorage)
          const savedColor = document.documentElement.getAttribute('data-primary') || 'purple';
          
          const colors = {
            purple: '#8750f7', pink: '#ec489a', blue: '#3b82f6',
            red: '#ef4444', yellow: '#eab308', orange: '#f97316',
            green: '#22c55e', cyan: '#06b6d4'
          };
          
          const darkColors = {
            purple: '#4a2baa', pink: '#9e267a', blue: '#1e4893',
            red: '#a83232', yellow: '#8a6305', orange: '#a34d09',
            green: '#147a3a', cyan: '#047481'
          };
          
          const themeColor = isDark ? (darkColors[savedColor] || '#4a2baa') : (colors[savedColor] || '#8750f7');
          
          let meta = document.querySelector("meta[name='theme-color']");
          if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'theme-color';
            document.head.appendChild(meta);
          }
          meta.content = themeColor;
          console.log('Status bar:', themeColor);
        } catch(e) { console.error(e); }
      }
      
      // Initial setup
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
      }
      
      const savedColor = localStorage.getItem('primary-color') || 'purple';
      document.documentElement.setAttribute('data-primary', savedColor);
      updateThemeColor();
      
      // 🔥 Watch for BOTH class and data-primary changes
      const observer = new MutationObserver(() => updateThemeColor());
      observer.observe(document.documentElement, { 
        attributes: true, 
        attributeFilter: ['class', 'data-primary'] 
      });
      
      // Listen for custom event from ColorPicker
      window.addEventListener('primaryColorChanged', () => updateThemeColor());
    })();
  `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-87R1TGZ3MT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-87R1TGZ3MT');
    `}
        </Script>
        {/* Structured Data - Person */}
        <Script
          id="person-json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nishitha Reddy Musku",
            url: BASE_URL,
            image: `${BASE_URL}/profile.jpg`,
            sameAs: [
              "https://github.com/muskunishitha",
              "https://linkedin.com/in/muskunishitha",
              "https://twitter.com/nishithareddy",
            ],
            jobTitle: "React Native & MERN Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance Developer",
            },
            knowsAbout: [
              "React Native",
              "MERN Stack",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Next.js",
            ],
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Your University Name",
            },
            description:
              "React Native & MERN Stack Developer specializing in building scalable mobile and web applications with modern technologies.",
          })}
        </Script>

        {/* Structured Data - Website */}
        <Script
          id="website-json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Nishitha Reddy Musku Portfolio",
            url: BASE_URL,
            description:
              "Portfolio of Nishitha Reddy Musku, React Native & MERN Stack Developer",
            potentialAction: {
              "@type": "SearchAction",
              target: `${BASE_URL}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>

        {/* Structured Data - BreadcrumbList */}
        <Script
          id="breadcrumb-json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: BASE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Portfolio",
                item: `${BASE_URL}/portfolio`,
              },
            ],
          })}
        </Script>

        <Providers>
          <ThemeProvider>
            <RouteTransition />
            <Header />
            <main>{children}</main>
            <Footer />
            <CustomCursor />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
