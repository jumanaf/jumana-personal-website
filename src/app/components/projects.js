import React from 'react';

export default function projects() {

    return (

<div className="flex items-center justify-between">
        <div className="flex-1">
        <h2 className="text-xl font-bold">Projects</h2>
        <p className="space-y-2 font-mono text-pretty text-l text-muted-foreground text-green-800 font-bold">
          Mobile and web application for an EV charging stealth startup
          </p>
          <p className="space-y-2 font-mono text-pretty text-sm text-green-600 text-muted-foreground">
          Next.JS, React, Node.JS, Express.JS, Tailwind, Docker, Google Cloud Storage, Vercel
          </p>
          <p className="space-y-30 font-mono text-pretty text-sm text-muted-foreground mb-10">
          <strong>Key insights:</strong> As a project, I developed a web application for a pilot for a stealth startup. This application allows users to log on, and allows us
          to access vehicle information to create a white-glove EV charging service. I am currently developing the mobile application that
          will be published to the app store (IOS and Android) that gives users a smoother and more personalized EV charging experience. T
          This experience was a way for me to learn rapidly about very new domains (EV charging, fullstack application development and deployment) and 
          shows that I can learn new technologies at speed to create impact using my skills as an engineer!
      </p>

          <p className="space-y-2 font-mono text-pretty text-l text-muted-foreground text-green-800 font-bold">
          Personal website
          </p>
          <p className="space-y-2 font-mono text-pretty text-sm text-green-600 text-muted-foreground">
          React, CSS, Tailwind, Javascript
          </p>
          <p className="space-y-30 font-mono text-pretty text-sm text-muted-foreground mb-10">
          <strong>Key insights:</strong> The website you see in front of you was designed by myself - this project was 
          a great way for me to learn and apply various learnings from my dabblings in application design. Though currently 
          very simple, I wanted to keep a minimalistic design to communicate about my experiences to the world!
          </p>

          {/* <p className="space-y-30 font-mono text-pretty text-l text-muted-foreground text-green-800 font-bold">
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
          </p> */}
        </div>
        </div>
    )
}