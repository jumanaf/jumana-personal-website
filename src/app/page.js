import Image from 'next/image'
import { inter } from '/src/app/fonts';
import headshot from "/public/headshot.png";
import { log } from 'console';
// import resume from "/src/data/resume";


export default function Home() {
  return (
    <main className="container relative mx-auto overflow-auto p-10 print:p-10 md:p-10">
    <section className="mx-1 w-full max-w-1.5l space-y-1 bg-white print:space-y-1">
      <div className="flex items-center justify-between">
        <div className="flex-1 space-y-1.5">
          <h1 className="text-2xl font-bold">Jumana Fathima</h1>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
         Data scientist with experience in techbio, focused on creating data-driven impact using effective
        data engineering and storytelling techniques.
          </p>
          <p className="items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="text-green-600 inline-flex gap-x-1.5 align-baseline leading-none text-green"
              >
                Seattle, WA, USA
              </a>
              </p>
        </div>
        <Image 
        className="flex flex-row"
      src={headshot} 
        alt="headshot"
        width={150}
        height={150}
        style={{
          maxWidth: "100%",
          height: "auto",}}/> 
        </div>
        
        </section>

        <section className="mx-1 w-full max-w-1.5l space-y-1 bg-white print:space-y-1">
        <div className="flex items-center justify-between">
        <div className="flex-1">
        <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            Welcome to my personal website! I'm a data scientist at 
            {' '}
  <a href="https://www.dynotx.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
    Dyno Therapeutics
  </a>, using data from powerful in-vivo and in-vitro experiments to
            further our understanding of gene therapy capsids. I'm passionate about the impact that great data visualization and storytelling has on 
            building great technologies.
          </p>
          </div>
          
          </div>
          <div>
          <p className="space-y-30 text-pretty font-mono text-sm text-muted-foreground">
          In my free time, I enjoy reading about web3, and quantum computing. I'm an avid bookworm, and also dabble in needlework and embroidery.
          </p>
          </div>
        </section>
        
        <section className="mx-1 my-10 w-full max-w-1.5l space-y-1 bg-white print:space-y-1">
        <div className="flex items-center justify-between">
        <div className="flex-1">
        <h2 className="text-xl font-bold">Education</h2>
        <p className="space-y-30 font-mono text-pretty text-l text-muted-foreground text-green-800 font-bold">
          Bachelors in Bioengineering, with a focus in Data Science
          </p>
          <p className="space-y-30 font-mono text-pretty text-sm text-green-600 text-muted-foreground">
          University of Washington, 2018 - 2021
          </p>
          <p className="space-y-30 my-5 font-mono text-pretty text-sm text-muted-foreground">
          <strong>Relevant coursework:</strong> Data Structures and Algorithms, Database Systems, Machine Learning, Elements of
Statistical Methods, Foundational Skills for Data Science
          </p>
          <p className="space-y-30 font-mono text-pretty text-sm text-muted-foreground">
          <strong>Key insights:</strong> This program at UW was highly interdisciplinary, involving 
          computer science, physics, civil and mechanical engineering, medicine, and so on; this enlightened to me the fact that innovation was born from 
          the intersection of various fields of study. I was especially excited about pulling key insights from rich biological data to 
          develop technologies of impact.
          </p>
        </div>
        </div>
        </section>


        <section className="mx-1 my-10 w-full max-w-1.5l space-y-1 bg-white print:space-y-1">
        <div className="flex items-center justify-between">
        <div className="flex-1">
        <h2 className="text-xl font-bold">Experience</h2>
        <p className="space-y-30 font-mono text-pretty text-l text-muted-foreground text-green-800 font-bold">
          Computational biologist
          </p>
          <p className="space-y-30 font-mono text-pretty text-sm text-green-600 text-muted-foreground">
          Dyno Therapeutics, 2021 - Present
          </p>
          <p className="space-y-30 my-5 font-mono text-pretty text-sm text-muted-foreground">
          <strong>Responsibilities:</strong> </p>
          <div className="my-2">
          <li className="-mb-2 my-5 font-mono text-pretty text-sm text-muted-foreground">Lead the in-depth cleaning, processing, and visualization of 10+ high-throughput Next Generation Sequencing library
datasets to extract key insights into the performance of gene therapy vectors, leading to the company’s first commercial
eye and brain therapy capsid launches</li>
<li className="-mb-2 my-5 font-mono text-pretty text-sm text-muted-foreground">Delivered impactful and swift insights leveraging data storytelling techniques to effectively communicate across various
stakeholders, ultimately leading the strategic direction of the company and future capsid launches</li>
<li className="-mb-2 my-5 font-mono text-pretty text-sm text-muted-foreground">Orchestrated cross-functional technical collaboration between software engineers, computational and lab scientists to
create accessible in-house data analysis and visualization tools, providing early insights into experimental data quality
and promising gene therapy capsids</li>
</div>

          <p className="my-10 space-y-30 space-x-30 font-mono text-pretty text-sm text-muted-foreground">
          <strong>Key insights:</strong> Dyno therapeutics is a $100M Series A startup, and I have been with the company 
          from when it was 50 employees to today, at ~200 employees. It has been awesome to see a techbio startup scale and 
          expand computational infrastructure. Especially early on in my time at Dyno, I wore multiple hats and worked with 
          engineers and scientists of varying backgrounds, and bridged gaps between pure software engineers and pure biologists 
          to create an accessible and effective internal data science toolkit.
          </p> 



          <p className="space-y-30 font-mono text-pretty text-l text-muted-foreground text-green-800 font-bold">
          Data Science Intern
          </p>
          <p className="space-y-30 font-mono text-pretty text-sm text-green-600 text-muted-foreground">
          Just-Evotec Biologics, 2021
          </p>
          <p className="space-y-30 my-5 font-mono text-pretty text-sm text-muted-foreground">
          <strong>Responsibilities:</strong> </p>
          <div className="my-2">
          <li className="-mb-2 my-5 font-mono text-pretty text-sm text-muted-foreground">Spearheaded training and fine tuning of in-house Generative Adversarial Network (GAN) models to design a
high-throughput and diverse humanoid antibody library, resulting in an enhanced internal development platform</li>
<li className="-mb-2 my-5 font-mono text-pretty text-sm text-muted-foreground">Collaborated with lab scientists to run statistical analyses and develop scalable improvements in antibody manufacturing
and existing assays</li>
</div>

          <p className="my-10 space-y-30 space-x-30 font-mono text-pretty text-sm text-muted-foreground">
          <strong>Key insights:</strong> Just-Evotec is a company that focuses on discovery and manufacturing of biological therapeutics. During my time at Just, I focused on their platform J.HAL, a platform
          for humanoid antibody library generation. Just was acquired by Evotec in 2019, and it was definitely interesting to work at a larger scale biotech company after my internship with Dyno, earlier in the year. 
          I had wonderful mentors across the company and led efforts in developing key machine learning models used to deliver antibody libraries for experimentation.
          
          </p> 


          <p className="space-y-30 font-mono text-pretty text-l text-muted-foreground text-green-800 font-bold">
          Data Science Intern
          </p>
          <p className="space-y-30 font-mono text-pretty text-sm text-green-600 text-muted-foreground">
          Dyno Therapeutics, 2021
          </p>
          <p className="space-y-30 my-5 font-mono text-pretty text-sm text-muted-foreground">
          <strong>Responsibilities:</strong> </p>
          <div className="my-2">
          <li className="-mb-2 my-5 font-mono text-pretty text-sm text-muted-foreground">Developed a structural biology analysis toolkit in Python currently used by computational biologists across the company,
improving consistency and quality of analyses</li>
<li className="-mb-2 my-5 font-mono text-pretty text-sm text-muted-foreground">Integrated publicly available biological data relevant to gene therapy vectors into the company database, enhancing
computational analyses and contextualizing data generated internally</li>
</div>

          <p className="my-10 space-y-30 space-x-30 font-mono text-pretty text-sm text-muted-foreground">
          <strong>Key insights:</strong> As my first internship in techbio, I thoroughly enjoyed my time at Dyno.
           I interacted with folks across the company and picked up key data science and software engineering skills, along with great context into gene therapy and publicly available biological datasets.
           Working with the incredible folks at Dyno inspired me to be scientifically curious, detail oriented, and effective in communication, all key skills for a successful data scientist.
          </p> 

         
        </div>
        </div>
        </section>

        <section className="mx-1 my-2 w-full max-w-1.5l space-y-1 bg-white print:space-y-1">
        <div className="flex items-center justify-between">
        <div className="flex-1">
        <h2 className="text-xl font-bold">Projects</h2>
        <p className="space-y-2 font-mono text-pretty text-l text-muted-foreground text-green-800 font-bold">
          Personal website
          </p>
          <p className="space-y-2 font-mono text-pretty text-sm text-green-600 text-muted-foreground">
          React, Next.JS, CSS, Tailwind, Javascript
          </p>
          <p className="space-y-30 font-mono text-pretty text-sm text-muted-foreground mb-10">
          <strong>Key insights:</strong> The website you see in front of you was designed by myself - this project was 
          a great way for me to learn and apply various learnings from my dabblings in application design. Though currently 
          very simple, I wanted to keep a minimalistic design to communicate about my experiences to the world!
          </p>


          <p className="space-y-30 font-mono text-pretty text-l text-muted-foreground text-green-800 font-bold">
          College public sentiment classifier model
          </p>
          <p className="space-y-30 font-mono text-pretty text-sm text-green-600 text-muted-foreground">
          Python, Numpy, NLTK, Sklearn, Pytorch
          </p>
          <p className="space-y-30 font-mono text-pretty text-sm text-muted-foreground">
          <strong>Key insights:</strong> As a highschooler, I recall using Reddit to learn about various colleges I was applying to as a way to learn more about the college, as well as the culture in the institution.
          As a tool to help past me, I built a ML classifier model to classify various colleges and universities across the US to analyze the public sentiment (via Reddit) of 
          a given institution. This was a fun project I worked on during the beginning of my career as a data scientist, but one I look back at fondly, since it inspired me to learn more about 
          data science, machine learning, and software engineering. 
          </p>
        </div>
        </div>
        </section>

        </main>

  )
}
