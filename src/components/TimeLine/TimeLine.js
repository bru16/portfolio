import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {
  return (
    <Section id='about'>
      <SectionDivider />
      <br />
      <SectionTitle>About me</SectionTitle>
      <SectionText>I'm a Computer Science student and I'm passionate about Software Development & Technology.
        I consider myself proactive, motivated, and with good communication skills.
        <br /> I'm looking forward my first job in the industry,
        so feel free to contact me, I'd love to hear from you 😃.
      </SectionText>
    </Section>
  );
};

export default Timeline;
