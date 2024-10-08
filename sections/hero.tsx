import Button from "../components/button"

const Hero = () => {
  return (
    <section className="hero-section">
      <h1 className="title">Hi I'm <span className="name"> Massyl! </span></h1>
      <h3 className="description">I am a Web Developer</h3>
      <p className="summary">I am an aspiring Web Developer, passionate about everything web!</p>
      <Button>See my Resume</Button>
    </section>
  )
}

export default Hero
