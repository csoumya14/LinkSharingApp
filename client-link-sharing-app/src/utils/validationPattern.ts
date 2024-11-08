// validationPatterns.ts
export const validationPatterns: { [key: string]: RegExp } = {
  github: /^https:\/\/github\.com\/[A-Za-z0-9_-]+$/,
  frontendmentor: /^https:\/\/www\.frontendmentor\.io\/profile\/[A-Za-z0-9_-]+$/,
  twitter: /^https:\/\/twitter\.com\/[A-Za-z0-9_]+$/,
  linkedin: /^https:\/\/www\.linkedin\.com\/in\/[A-Za-z0-9_-]+$/,
  youtube: /^https:\/\/www\.youtube\.com\/[A-Za-z0-9_-]+$/,
  facebook: /^https:\/\/www\.facebook\.com\/[A-Za-z0-9_.-]+$/,
  twitch: /^https:\/\/www\.twitch\.tv\/[A-Za-z0-9_-]+$/,
  devto: /^https:\/\/dev\.to\/[A-Za-z0-9_-]+$/,
  codewars: /^https:\/\/www\.codewars\.com\/users\/[A-Za-z0-9_-]+$/,
  codepen: /^https:\/\/codepen\.io\/[A-Za-z0-9_-]+$/,
  freecodecamp: /^https:\/\/www\.freecodecamp\.org\/[A-Za-z0-9_-]+$/,
  gitlab: /^https:\/\/gitlab\.com\/[A-Za-z0-9_-]+$/,
  hashnode: /^https:\/\/hashnode\.com\/@[A-Za-z0-9_-]+$/,
  stackoverflow: /^https:\/\/stackoverflow\.com\/users\/[0-9]+\/[A-Za-z0-9_-]+$/,
};
