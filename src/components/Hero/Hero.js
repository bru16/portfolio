import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there!<br />
        I'm Bruno Aburto
      </SectionTitle>
      <SectionText>
        I'm a Software Developer and a Computer Science student from Argentina.
      </SectionText>
      <a href='/images/CV_AburtoBruno.pdf' target="_blank"><Button>Download CV</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;