import SidebarItem from './SidebarItem';
import items from '../../data/sidebar.json';
import { FormEl } from './styles/FormEl.styles';
import { Label } from './styles/Label.styles';
import { FormContainer } from './styles/FormContainer.styles';
import { Input } from './styles/Input.styles';
import { Button } from './styles/Button.styles';

export default function Form() {
  return (
    <FormEl>
      <Label>
        Search by site
        <FormContainer>
          <Input type="text" name="name" />
        </FormContainer>
      </Label>
      <Button>Search</Button>
    </FormEl>
  );
}
