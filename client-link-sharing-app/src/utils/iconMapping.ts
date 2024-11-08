import { FrontendMentor } from '../components/Atoms/SVGs/FrontendMentor/FrontendMentor';
import { Github } from '../components/Atoms/SVGs/Github/Github';
import React from 'react';
import { Twitter } from '../components/Atoms/SVGs/Twitter/Twitter';
import { LinkedIn } from '../components/Atoms/SVGs/LinkedIn/LinkedIn';
import { YouTube } from '../components/Atoms/SVGs/Youtube/Youtube';
import { Facebook } from '../components/Atoms/SVGs/Facebook/Facebook';
import { Twitch } from '../components/Atoms/SVGs/Twitch/Twitch';
import { DevTo } from '../components/Atoms/SVGs/DevTo/DevTo';
import { CodeWars } from '../components/Atoms/SVGs/CodeWars/CodeWars';
import { CodePen } from '../components/Atoms/SVGs/CodePen/CodePen';
import { Freecodecamp } from '../components/Atoms/SVGs/Freecodecamp/Freecodecamp';
import { Gitlab } from '../components/Atoms/SVGs/Gitlab/Gitlab';
import { Hashnode } from '../components/Atoms/SVGs/Hashnode/Hashnode';
import { Stackoverflow } from '../components/Atoms/SVGs/Stackoverflow/Stackoverflow';

export type IconKey =
  | 'github'
  | 'frontendmentor'
  | 'twitter'
  | 'linkedin'
  | 'youtube'
  | 'facebook'
  | 'twitch'
  | 'devto'
  | 'codewars'
  | 'codepen'
  | 'freecodecamp'
  | 'gitlab'
  | 'hashnode'
  | 'stackoverflow';

export const iconMapping: Record<IconKey, React.ComponentType> = {
  github: Github,
  frontendmentor: FrontendMentor,
  twitter: Twitter,
  linkedin: LinkedIn,
  youtube: YouTube,
  facebook: Facebook,
  twitch: Twitch,
  devto: DevTo,
  codewars: CodeWars,
  codepen: CodePen,
  freecodecamp: Freecodecamp,
  gitlab: Gitlab,
  hashnode: Hashnode,
  stackoverflow: Stackoverflow,
};
