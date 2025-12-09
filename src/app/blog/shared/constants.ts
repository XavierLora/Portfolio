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
    url: '/blog/blogPost3',
    tag: 'Career',
    title: 'My Pursuit of Happiness',
    author: 'Xavier Lora',
    authorPic: 'assets/imgs/headshotXavierLora.png',
    authorTitle: 'Web/App Enthusiast'
  }, 
  {
    url: '/blog/blogPost2',
    tag: 'Tutorial',
    title: 'Guide to Setting up Dark Mode with Tailwind',
    author: 'Xavier Lora',
    authorPic: 'assets/imgs/headshotXavierLora.png',
    authorTitle: 'Web/App Enthusiast'
  },
  {
    url: '/blog/blogPost1',
    tag: 'Career',
    title: 'My Internship Experience as a Front End Web Developer',
    author: 'Xavier Lora',
    authorPic: 'assets/imgs/headshotXavierLora.png',
    authorTitle: 'Web/App Enthusiast'
  },
];