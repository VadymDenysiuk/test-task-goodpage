import { SidebarList } from './styles/SidebarList.styles';
import { SidebarItemEl } from './styles/SidebarItemEl.styles';

export default function SidebarItem({ item }) {
  return (
    <a href="/">
      <SidebarItemEl>{item.title}</SidebarItemEl>
    </a>
  );
}
