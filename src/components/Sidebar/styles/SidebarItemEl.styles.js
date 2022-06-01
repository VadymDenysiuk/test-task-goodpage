import styled from 'styled-components';

export const SidebarItemEl = styled.li`
  display: flex;
  font-size: 1.2em;
  color: black;
  justify-content: space-between;
  padding: 0.75em 1em;
  transition: background-color 0.15s;
  border-radius: 5px;
  &:hover {
    background-color: #f5f5dc;
  }
`;
