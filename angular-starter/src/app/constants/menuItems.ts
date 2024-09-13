import { MenuItem } from 'primeng/api';

export const menus: MenuItem[] = [
  {
    label: 'Home',
  },
  {
    label: 'About',
    items: [{ label: 'profile' }, { label: 'setting' }],
  },
  {
    label: 'Contact',
  },
];

export interface Menu {
  item: string;
  subMenu?: Menu[];
}

export function createBreadcrumbItem(
  label: string,
  menu: MenuItem[],
  path: MenuItem[] = []
): MenuItem[] | null {
  for (let item of menu) {
    // The issue arises because you're spreading the item.label, which could potentially be undefined if label is an optional property in your MenuItem type.
    const currentPath = item.label ? [...path, { label: item.label }] : null;

    if (item.label === label) {
      return currentPath;
    }
  }
  return null;
}
