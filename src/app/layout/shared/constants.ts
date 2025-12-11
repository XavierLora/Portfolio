export interface NabMenuItem {
  label: string;
  url: string;
}

export const NAVBAR_MENU_ITEMS: NabMenuItem[] = [
  { label: 'Home', url: '/' },
  { label: 'Blog', url: '/blog' },
];