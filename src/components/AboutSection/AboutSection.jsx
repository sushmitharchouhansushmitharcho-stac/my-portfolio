import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/image/Photo 1.jpeg' alt='Sushmitha R Chouhan' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! Good Morning, I'm Sushmitha R Chouhan, a developer based in India building fast, accessible web experiences. I create modern,responsive, and user-friendly websites using HTML, CSS, JavaScript, React. I enjoy turning ideas into beautiful web experiences</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
