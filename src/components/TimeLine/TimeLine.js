import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {
  return (
    <Section id='about'>
      <SectionDivider />
      <br />
      <SectionTitle>About me</SectionTitle>
      <SectionText>I'm a Computer Science student and I'm passionate about Software Development & Technology.
        <br />
        I consider myself proactive, motivated, and creative. Always looking for new challenges, able to
        fit in different work environments.
        <br /> I would like to be part of a team that allows me to develop my abilities and thus
        be able to grow professionally 😃
      </SectionText>
    </Section>
  );
};

export default Timeline;
