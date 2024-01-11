import Image from 'next/image';
import github from '../public/Screenshot (6).png';
import horiseon from '../public/Screenshot (10).png';
import runbuddy from '../public/Screenshot (8).png';
import choovie from '../public/Screenshot (33).png';

export default function Home() {

  return (
    <main className="">
      <header>
        <h1>
          <a href={"/"} className="title">Dil<span className="span">lin Hels</span>ley</a>
        </h1>
      
        <nav>
          <ul>
              <li>
                  <a href="/">Portfolio</a>
              </li>

              <li>
                  <a href={"/bio"}>Bio</a>
              </li>

              <li>
                  <a href="#contact-info">Contact</a>
              </li>
          </ul>
        </nav>
     </header>

     <section className='flexbox'>
      <Image
          className="hero"
          src="/shutterstock_671483350.jpg"
          alt="Dillin Helsley on stage at the Emerson Theatre"
          width={9999}
          height={9999}
          priority
        />



<div className="portfolio">
        <h1>PORTFOLIO</h1>

        <article className="application">
          <h2>My Github Profile</h2>
          <a href="https://github.com/dillin92"><Image src={github} alt="Github page" width={999} height={999} priority/></a>
        </article>

        <article className='application'>
          <h2>Choovie Application</h2>
          <a href="https://kmelissasantos.github.io/Choovie/"><Image src={choovie} alt="choovie application" width={999} height={999}/></a>
        </article>

        <article className="application">
          <h2>Run Buddy Website</h2>
          <a href="https://dillin92.github.io/run-buddy/"><Image src={runbuddy} alt="run buddy application" width={999} height={999}/></a>
        </article>

        <article className="application">
          <h2>Horiseon Website</h2>
          <a href="https://dillin92.github.io/horiseon-Dillin-Helsley/"><Image src={horiseon} alt="horiseon website"  width={999} height={999}/></a>
        </article>

        
      </div> 
     </section>

     <footer>

     <h2>Thank you for taking the time to peruse my portfolio</h2>
        <section className ="contact-info" id="contact-info">
          <h2>Contact Info</h2>

          <ul>
            <li><strong>Email:</strong> <a href="https://dillin970@gmail.com">dillin970@gmail.com</a></li>
            <li><strong>Github:</strong> <a href="https://github.com/dillin92">github.com/dillin92</a></li>
            <li><strong>aedIn:</strong> <a href="https://www.aedin.com/in/dillin-helsley-821668208/">https://www.aedin.com/in/dillin-helsley-821668208/</a></li>
          </ul>

          </section>

         
          <h3 className="sincerely">Sincerely- Dillin Helsley</h3>
     </footer>
      

    </main>
  )
}
