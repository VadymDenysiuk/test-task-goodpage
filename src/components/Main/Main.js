import { Container } from './styles/Container.styles';
import { Section } from './styles/Section.styles';
import { Text } from './styles/Text.styled';
import { Title } from './styles/Title.styles';
import Sidebar from '../Sidebar/Sidebar';
import { Span } from './styles/Input.styles';
import ContentEditable from 'react-contenteditable';
import { useRef, useState } from 'react';
import data from '../../data/text.json';
import { BsFillPencilFill, BsSaveFill } from 'react-icons/bs';

function Main() {
  const [title, setTitle] = useState(data[0].title);
  const [text, setText] = useState(data[1].text);
  const [isEditText, setIsEditText] = useState(false);
  const [isShown, setIsShown] = useState(false);

  function handleChangeText(e) {
    setText(e.target.value);
  }

  function toggleIsEditText() {
    setIsEditText(prev => !prev);
  }

  return (
    <Container>
      <Sidebar />
      <Section onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
        <Title>{title}</Title>
        {isEditText ? (
          <ContentEditable
            style={{
              textAlign: 'center',
              color: '#757575',
              fontSize: 20,
              lineHeight: 1.1,
              padding: 5,
              marginBottom: 10,
            }}
            html={text}
            disabled={false}
            onChange={handleChangeText}
            tagName="article"
          />
        ) : (
          <Text>{text}</Text>
        )}
        {isShown ? (
          <button onClick={toggleIsEditText}>
            {isEditText ? <BsSaveFill /> : <BsFillPencilFill />}
          </button>
        ) : null}
      </Section>
    </Container>
  );
}

export default Main;
