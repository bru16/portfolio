import React from 'react';
import { DiFirebase, DiJavascript1, DiReact } from 'react-icons/di';
import { BsCodeSlash } from 'react-icons/bs'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>These are the technologies that I'm comfortable with and have experience by doing different projects.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React, Next <br />
            HTML & CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, SQL and <br /> NOSQL databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BsCodeSlash size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            JavaScript, TypeScript <br />
            and Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
