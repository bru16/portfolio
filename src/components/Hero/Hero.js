import React from 'react';
import { FaFileDownload } from 'react-icons/fa'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there!<br />
        I'm Bruno Aburto
      </SectionTitle>
      <SectionText>
        I'm a Software Developer and a Computer Science student from Argentina.
      </SectionText>
      <Button>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;