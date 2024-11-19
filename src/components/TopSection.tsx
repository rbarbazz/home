import React from 'react'
import Highlight from '../components/Highlight'
import classes from '../css/TopSection.module.css'

const TopSection = () => (
  <div>
    <header className={classes.header}>
      <div></div>
      <h2>Raphaël Barbazza (Raph)</h2>
    </header>
    <div className={classes.bio}>
      <div>
        <p>
          {`I'm a Web Developer based in `}
          <Highlight>BC, Canada</Highlight>.
        </p>
        <p>
          {`I specialize in `}
          <Highlight>React</Highlight>
          {` and `}
          <Highlight>NodeJS</Highlight>
          {`, but I also work with `}
          <Highlight>Python</Highlight>.
        </p>
      </div>
      <img
        className={classes.portrait}
        src="/img/anime-midjourney-portrait.png"
        alt="AI generated image of Raph"
      />
    </div>
  </div>
)

export default TopSection
