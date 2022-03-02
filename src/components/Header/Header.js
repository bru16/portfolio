import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Anchor } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <Anchor>
          <BiCodeAlt size="3rem" />
          <Span>Welcome</Span>
        </Anchor>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/bru16">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/brunoaburto1/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
