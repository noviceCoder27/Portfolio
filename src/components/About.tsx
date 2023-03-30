import '../styles/About.css'



export const About = () => {

  return (
    <main>
        <div className='container'>
            <section className='introduction'>
                <h1>About Me</h1>
                <hr />
                <p>I'm a CSE undergrad from India who will complete my BTech degree in 2023. I like learning new technologies and applying them to build stuff. I'm a web developer who mostly focuses on the Frontend aspect of the website like creating responsive desgins, working with api requests,breaking complex web designs into maintainable component based architecture, etc.</p>
            </section>
            <section className='skillset'>
                <h2>Skills</h2>
                <ul className='skills'>
                    <div className='col1'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Tailwind</li>
                        <li>CSS Framweworks</li>
                        <li>React.js</li>
                        <li>Next.js</li>
                    </div>
                    <div className='col2'>
                        <li>Redux</li>
                        <li>React Query</li>
                        <li>Git</li>
                        <li>Github</li>
                        <li>Firebase</li>
                        <li>Node.js</li>
                    </div>
                </ul>
            </section>
        </div>
    </main>
  )
}
