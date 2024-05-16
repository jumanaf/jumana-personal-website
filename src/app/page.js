import Image from 'next/image'
import { inter } from '/src/app/fonts';
import headshot from "/public/headshot.png";
import Education from "./components/education";
import About from "./components/about"
import Experiences from "./components/experiences"
import Projects from "./components/projects"
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
        <About/>
        </section>
        
        <section className="mx-1 my-10 w-full max-w-1.5l space-y-1 bg-white print:space-y-1">
        <Projects/>
        </section>

        <section className="mx-1 my-5 w-full max-w-1.5l space-y-1 bg-white print:space-y-1">
        <Experiences/>
        </section>

        <section className="mx-1 my-10 w-full max-w-1.5l space-y-1 bg-white print:space-y-1">
        <div className="flex items-center justify-between">
        <Education/>
        </div>
        </section>






        </main>

  )
}
