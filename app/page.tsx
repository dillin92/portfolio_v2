import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <header>
      <h1>
          <a className="title">Dil<span className="span">lin Hels</span>ley</a>
      </h1>
      
      <nav>
          <ul>
              <li>
                  <a href="index.html">Portfolio</a>
              </li>

              <li>
                  <a href="bio.html">Bio</a>
              </li>

              <li>
                  <a href="#contact-info">Contact</a>
              </li>
          </ul>
      </nav>
     </header>


     <section className='flexbox'>
     <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
       
        </div>

        
      </div>

      <Image
          className="hero"
          src="/shutterstock_671483350.jpg"
          alt="Dillin Helsley on stage at the Emerson Theatre"
          width={9999}
          height={9999}
          priority
        />

<section className="portfolio">
        <h1>PORTFOLIO</h1>

        <article className="application">
          <h2>My Github Profile</h2>
          <a href="https://github.com/dillin92"><Image src="" alt="screenshot of Dillin Helsley's github profile" width={50} height={50} priority/></a>
        </article>

        <article>
          <h2>Choovie Application</h2>
          <a href="https://kmelissasantos.github.io/Choovie/"><Image src="/public/Screenshot(33).png" alt="choovie application" width={99} height={99}/></a>
        </article>

        <article className="application">
          <h2>Run Buddy Website</h2>
          <a href="https://dillin92.github.io/run-buddy/"><Image src="/public/Screenshot(8).png" alt="run buddy application" width={99} height={99}/></a>
        </article>

        <article className="application">
          <h2>Horiseon Website</h2>
          <a href="https://dillin92.github.io/horiseon-Dillin-Helsley/"><Image src="/public/Screenshot(10).png" alt="horiseon website"  width={99} height={99}/></a>
        </article>

        
      
      </section> 
     </section>

     <footer>
        <section className ="contact-info" id="contact-info">
          <h2>Contact Info</h2>

          <ul>
            <li><strong>Email:</strong> <a href="https://dillin970@gmail.com">dillin970@gmail.com</a></li>
            <li><strong>Github:</strong> <a href="https://github.com/dillin92">github.com/dillin92</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/dillin-helsley-821668208/">https://www.linkedin.com/in/dillin-helsley-821668208/</a></li>
          </ul>

          </section>

          <h2>Thank you for taking the time to peruse my portfolio</h2>
          <h3 className="sincerely">Sincerely- Dillin Helsley</h3>
      </footer>
      

    </main>
  )
}
