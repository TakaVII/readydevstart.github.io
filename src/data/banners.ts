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
    id: 'banner-l3',
    title: 'Level 3 - Indie Game Academy',
    imageUrl: 'assets/banners/L3 2026.svg',
    altText: 'Level 3 - Indie Game Academy',
    linkUrl: 'https://indiegameacademy.com/class-schedule-level-3/'
  },
  {
    id: 'banner-dotr',
    title: 'Daughter of the Rift - Play it on Steam',
    imageUrl: '/assets/banners/Dotr Banner.svg',
    altText: 'Daughter of the Rift - Play it on Steam (600x170)',
    linkUrl: 'https://store.steampowered.com/app/3588170/Daughter_of_the_Rift/?utm_source=iga&utm_medium=rds&utm_campaign=header_banner'
  },
  {
    id: 'banner-www',
    title: 'Whiskers, Wizards and Wands - Play it on Steam',
    imageUrl: '/assets/banners/WWW Banner.svg',
    altText: 'Whiskers, Wizards and Wands - Play it on Steam (600x170)',
    linkUrl: 'https://store.steampowered.com/app/3588160/Whiskers_Wizards_and_Wands/?utm_source=iga&utm_medium=rds&utm_campaign=header_banner'
  },
  {
    id: 'banner-tbia',
    title: 'The Box is Alive - Play it on Steam',
    imageUrl: '/assets/banners/TBiA Banner.svg',
    altText: 'The Box is Alive - Play it on Steam (600x170)',
    linkUrl: 'https://store.steampowered.com/app/3961120/The_Box_is_Alive/?utm_source=iga&utm_medium=rds&utm_campaign=header_banner'
  },
  {
    id: 'banner-podcast',
    title: 'Indie Game Guildhall Podcast',
    imageUrl: '/assets/banners/banner-podcast-placeholder.svg',
    altText: 'Indie Game Guildhall Community & Podcast (600x170)',
    linkUrl: 'https://www.spreaker.com/podcast/indie-game-guildhall--5279646'
  }
];
