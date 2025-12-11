export interface PostTag {
  tag: string;
}

export interface BlogPostHeaderContent {
  url: string;
  tag: string;
  title: string;
  author: string;
  authorPic: string;
  authorTitle: string;
}

export const BLOG_POST_TAGS: PostTag[] = [
  {
    tag: 'Career',
  },
  {
    tag: 'Tutorial',
  },
];

export const BLOG_POST_HEADER_CONTENT: BlogPostHeaderContent[] = [
    {
    url: 'My-Pursuit-Of-Happiness',
    tag: 'Career',
    title: 'My Pursuit of Happiness',
    author: 'Xavier Lora',
    authorPic: 'assets/imgs/headshotXavierLora.png',
    authorTitle: 'Web/App Enthusiast'
  },
  {
    url: 'Web-Development-as-a-Career',
    tag: 'Career',
    title: 'Web Development as a Career',
    author: 'Xavier Lora',
    authorPic: 'assets/imgs/headshotXavierLora.png',
    authorTitle: 'Web/App Enthusiast'
  },
];