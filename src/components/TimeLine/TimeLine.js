import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Link } from './TimeLineStyles'

const Timeline = () => {
  return (
    <Section id='about'>
      <SectionDivider />
      <br />
      <SectionTitle>About me</SectionTitle>
      <SectionText>I'm a Computer Science student and I'm passionate about Software Development & Technology.
        I consider myself creative, curious and dedicated. Always looking for new challenges,
        able to be part of different work environments.

        <br />
        <br /> I'm currently working and developing my skills as a
        <br />
        QA Automation Engineer at <Link href='https://practia.global/'>Practia Global 💗</Link>
      </SectionText>
    </Section>
  );
};

export default Timeline;
