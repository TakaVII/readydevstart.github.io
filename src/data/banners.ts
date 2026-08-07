/**
 * Persistent Header Announcement Banners Configuration
 * 
 * Instructions for adding or replacing banners:
 * 1. Place your banner image file in `/public/assets/banners/` (e.g. `/public/assets/banners/my-banner.jpg`).
 * 2. Recommended dimensions: 600 x 170 pixels (Aspect ratio ~3.5:1, or 1200 x 340 for Retina displays).
 * 3. Update the `defaultBanners` array below with your new image path, link URL, title, and alt text.
 * 4. The slideshow displays exactly 2 banners per screen on desktop/tablet, and 1 banner per screen on mobile.
 */

export interface Banner {
  id: string;
  title: string;
  imageUrl: string;
  altText: string;
  linkUrl: string;
}

export const defaultBanners: Banner[] = [
  {
    id: 'banner-iga-level1',
    title: 'Indie Game Academy - Level 1 Cohort',
    imageUrl: '/assets/banners/banner-level1-placeholder.svg',
    altText: 'Level 1 Game Development Cohort - Indie Game Academy (600x170)',
    linkUrl: 'https://indiegameacademy.com'
  },
  {
    id: 'banner-discord',
    title: 'Join 5,000+ Game Devs in the IGA Discord',
    imageUrl: '/assets/banners/banner-discord-placeholder.svg',
    altText: 'Join 5,000+ indie game developers in the IGA Discord (600x170)',
    linkUrl: 'https://discord.gg/9FR7g72bxj'
  },
  {
    id: 'banner-blueprints',
    title: 'Free Studio & Game Design Templates',
    imageUrl: '/assets/banners/banner-blueprints-placeholder.svg',
    altText: 'Free GDD, Pitch Deck, and Studio Templates (600x170)',
    linkUrl: '/blueprints/'
  },
  {
    id: 'banner-podcast',
    title: 'Indie Game Guildhall Podcast',
    imageUrl: '/assets/banners/banner-podcast-placeholder.svg',
    altText: 'Indie Game Guildhall Community & Podcast (600x170)',
    linkUrl: 'https://tr.ee/LwqloRs-lA'
  }
];
