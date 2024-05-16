import React from 'react';

export default function about() {
    return (
    <>
<div className="flex items-center justify-between">
        <div className="flex-1">
            <h2 className="text-xl font-bold">About</h2>
            <p className="text-pretty font-mono text-sm text-muted-foreground">
                Welcome to my personal website! I'm a data scientist, formerly at 
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
        </>
    )
}
