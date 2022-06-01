import SidebarItem from './SidebarItem';
import items from '../../data/sidebar.json';
import { SidebarEl } from './styles/SidebarEl.styles';
import Form from './Form';
import { SidebarList } from './styles/SidebarList.styles';

export default function Sidebar() {
  return (
    <SidebarEl>
      <Form />
      <SidebarList>
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </SidebarList>
    </SidebarEl>
  );
}
