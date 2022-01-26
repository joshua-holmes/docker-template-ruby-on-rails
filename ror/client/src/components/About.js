import Container from "./Container";

function About() {
  
  return (
    <Container>
      <h2>Who Am I Again?</h2>
      <p>Hi, my name is Joshua Holmes! I'm a full-stack software engineer and I built this app. This application serves as a template for creating a Docker image out of a React on Rails application with a PostgreSQL database on the backend. For full instructions on how to use this, visit my <a href="https://github.com/joshua-holmes/docker-template-react-on-rails" target="_blank">GitHub page on this project</a>!</p>
      <p>If you are here to use the todo list, don't let me stop you!</p>
    </Container>
  )
}

export default About;