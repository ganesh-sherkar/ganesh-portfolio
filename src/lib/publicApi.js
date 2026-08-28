import {
  fallbackAbout,
  fallbackHero,
  fallbackPortfolio,
  fallbackResume,
  fallbackServices,
  fallbackSettings,
} from "./publicContent";

export function fetchHeroContent() {
  return Promise.resolve(fallbackHero);
}

export function fetchPortfolioContent() {
  return Promise.resolve(fallbackPortfolio);
}

export function fetchResumeContent() {
  return Promise.resolve(fallbackResume);
}

export function fetchServicesContent() {
  return Promise.resolve(fallbackServices);
}

export function fetchAboutContent() {
  return Promise.resolve(fallbackAbout);
}

export function fetchSiteSettings() {
  return Promise.resolve(fallbackSettings);
}
