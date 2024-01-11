import Image from 'next/image';
import snhu from '../../../public/SNHU.png'
import butler from '../../../public/butler.png';
import sal from '../../../public/save-a-lot.jpg';
import Link from 'next/link';

export default function Bio() {
  return (
  <main>
   <header>
        <h1>
          <Link href={"/"} className="title">Dil<span className="span">lin Hels</span>ley</Link>
        </h1>
      
        <nav>
          <ul>
              <li>
                  <Link href="/">Portfolio</Link>
              </li>

              <li>
                  <Link href={"/pages/bio"}>Bio</Link>
              </li>

              <li>
                  <Link href="#contact-info">Contact</Link>
              </li>
          </ul>
        </nav>
   </header>

    <section className="biohero">
    </section>

    <section className="bio">
            <h2>About Dillin Helsley</h2>
            <p>
                Hello, My name is Dillin Helsley. Im 28 years old and I live in Muncie, Indiana. I have 3 beautiful kids and I am happily engaged with another baby on the way! I currently work for a grocery distribution center for Save-A-Lot grocery stores as an order selector. I am currently enrolled in Butler Universities Executive Coding Bootcamp. I am eagerly anticipating the day that I enter into the field of web development.
                
                 In my free time I love to play music, mainly guitar,vocals, and trumpet but I can also play banjo, violin, piano, tuba, and little bit of drums. I have been a performing artist for about 10 years now. I have organized and promoted music events. I have been on the radio locally and have performed with national acts. Music has given me many memorable experiences!
            </p>         
    </section>  

    
<div className='experience'>
    

    <section className="experience">
                <article>
                    <h2>Education</h2>
                        <ul>
                            <li>
                                <h2>Butler University Executive Coding Bootcamp</h2>
                                <a href="https://bootcamp.butler.edu/coding/landing/?s=Google-Brand_RFull_&msg_cv_scta=4&msg_cv_stbn=1&msg_cv_fcta=1&fqvar1=3&dki=Learn%20Coding&pkw=butler%20coding%20bootcamp&pcrid=471497403743&pmt=e&utm_source=google&utm_medium=cpc&utm_campaign=GGL%7CBUTLER-UNIVERSITY%7CSEM%7CCODING%7C-%7COFL%7C_RFull_%7CALL%7CBRD%7CEXACT%7CCore%7CBootcamp&utm_term=butler%20coding%20bootcamp&s=google&k=butler%20coding%20bootcamp&utm_adgroupid=109750074686&utm_locationphysicalms=9016512&utm_matchtype=e&utm_network=g&utm_device=c&utm_content=471497403743&utm_placement=&gclid=CjwKCAjwg4-EBhBwEiwAzYAlsuVJix66ICyZIoFaM_Fiq_rQ0JniLSuF01LkUoasnCYM6WzrRTigghoCZxgQAvD_BwE&gclsrc=aw.ds"><Image src={butler} alt="Southern New Hampshire University" width={999} height={999}></Image></a>
                                <h3>Graduated 9/15/21</h3>
                            </li>

                            <li>
                                <h2>Southern New Hampshire University</h2>
                                <a href="https://degrees.snhu.edu/?utm_campaign=PFBranded&pfsegment=BR&utm_source=google&utm_medium=pdsearch&utm_content=113119348401&snhu_segment=ol&k_clickid=_k_CjwKCAjwg4-EBhBwEiwAzYAlsjRt4S3bv1egzvPR2t_Dhotd4aDSt3cORa6oBhab5sBjWUvMbBzdLRoCc4MQAvD_BwE_k_&adkeyword=southern%20new%20hampshire%20university&admatchtype=e&addevice=c&adnetwork=g&adcampaignid=314118801&adcampaignname=G:Brand_General:US&adgroupid=24994550241&adgroupname=Southern-New-Hampshire-University-ONLY-EXACT-BRAND-GENERAL:US&adlocationid=9016512&adplacement=&venpubid=ppcbrand&gclid=CjwKCAjwg4-EBhBwEiwAzYAlsjRt4S3bv1egzvPR2t_Dhotd4aDSt3cORa6oBhab5sBjWUvMbBzdLRoCc4MQAvD_BwE"><Image src={snhu} alt="Butler University Logo" width={999} height={999}></Image></a>
                                <h3>Psychology Major</h3>
                            </li>
                        </ul>

                        
                </article>
    </section>

    <section className="jobs">

                

                <article className ="jobs">
                    <h2>Current Employment</h2>
                    <h3>Save-A-Lot Distribution Center
                        <Image src={sal} alt="two pallets of groceries ready to be wrapped on a electric riding pallet jack"></Image>
                    </h3>    
                    <h4> My current workplace is Save-A-Lot Distribution center.</h4>
                    <p>As an order selector my job resposibilities are grabbing the case items for the order given to me through a vocollect headset, stacking them on a pallet so that they will reach their destination, wrapping the finished pallets, labeling them with a shipping label, and then dropping them off at the correct dock door. I have also been a forklift operator.
                        I have been employed with Save-A-Lot since 2019. I really enjoy what I do and Save-A-Lot is a great company to work for and when I make my transition into the field of web development it will be bittersweet. It will be graciously welcomed though!
                    </p>
                </article>

    </section>
</div>
    



    <footer>

      
        <h2>Thank you for taking the time to peruse my portfolio</h2>
        <section className ="contact-info" id="contact-info">
          
          <h2>Contact Info</h2>

          <ul>
            <li><strong>Email:</strong> <a href="https://dillin970@gmail.com">dillin970@gmail.com</a></li>
            <li><strong>Github:</strong> <a href="https://github.com/dillin92">github.com/dillin92</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/dillin-helsley-821668208/">https://www.linkedin.com/in/dillin-helsley-821668208/</a></li>
          </ul>

          </section>

          <h3 className="sincerely">Sincerely- Dillin Helsley</h3>
    </footer>


  </main>
  )
}