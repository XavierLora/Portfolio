export interface AboutMeObject {
  title: string;
  subtext: string;
  path: string;
  id: string;
  state?: string;
}

export interface CodingLanguages {
  name: string;
  stars: number;
  class: string;
}

export interface ProjectObject {
  title: string;
  subtext: string;
  url: string;
  id: string;
  state?: string;
}

export const ABOUT_ME_TEXT: AboutMeObject[] = [
  {
    title: 'Experience and College',
    subtext: 'My path to becoming a Web and App Dev',
    path: 'M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z',
    id: '1',
    state: 'active',
  },
  {
    title: 'Future Plans',
    subtext: 'Current and Future Plans as a Web Dev',
    path: 'm260-260 300-140 140-300-300 140-140 300Zm220-180q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z',
    id: '2',
  },
  {
    title: 'Languages and Frameworks',
    subtext: "What I've used both in school, on my own, and on the job",
    path: 'M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z',
    id: '3',
  },
];

export const CODING_LANGUAGES: CodingLanguages[] = [
  {
    name: 'Angular',
    stars: 5,
    class: 'devicon-angular-plain',
  },
  {
    name: 'HTML',
    stars: 5,
    class: 'devicon-html5-plain-wordmark',
  },
  {
    name: 'TypeScript',
    stars: 4,
    class: 'devicon-typescript-plain',
  },
  {
    name: 'Java',
    stars: 4,
    class: 'devicon-java-plain',
  },
  {
    name: 'Boostrap',
    stars: 4,
    class: 'devicon-bootstrap-plain',
  },
  {
    name: 'Tailwind',
    stars: 4,
    class: 'devicon-tailwindcss-original',
  },
  {
    name: 'C/C++',
    stars: 4,
    class: 'devicon-c-plain',
  },
  {
    name: 'Git/GitHub',
    stars: 5,
    class: 'devicon-githubcodespaces-plain',
  },
  {
    name: 'Android Studio',
    stars: 4,
    class: 'devicon-androidstudio-plain',
  },
  {
    name: 'Unix',
    stars: 5,
    class: 'devicon-unix-original',
  },
  {
    name: 'SQL/mySQL',
    stars: 4,
    class: 'devicon-mysql-plain-wordmark',
  },
  {
    name: 'php',
    stars: 3,
    class: 'devicon-php-plain',
  },
];

export const PROJECT_LIST: ProjectObject[] = [
  {
    title: 'NBStats',
    subtext:
      "As an avid Basketball fan, I noticed there weren't alot of visually compelling Stats Sites. Well, Here you go.",
    url: 'https://xavierlora.github.io/NBStats/',
    id: '1',
    state: 'active',
  },
  {
    title: 'ZeldaApi Tracker',
    subtext:
      'Being a Big Fan of the recent Zelda games, I was able to use a Rest API to creat an ingame item Tracker.',
    url: 'https://xavierlora.github.io/ZeldaApiApp/',
    id: '2',
  },
  {
    title: 'CLCF Baseball',
    subtext:
      'I was fortunate enough to have the opportunity to work with CLCF Baseball and design their latest site!',
    url: 'https://clcfbaseball.com',
    id: '3',
  },
];
