import Layout from '@theme/Layout'
import React from 'react'

import classes from '../css/home.module.css'

const Home = () => (
  <Layout title="Home" description="I'm a Web Developer based in BC, Canada.">
    <main className={classes.main}>
      <header className={classes.header}>
        <div></div>
        <h2>Raphaël Barbazza (Raph)</h2>
      </header>
      <div>
        <div className={classes.bio}>
          <div>
            <p>
              {`I'm a Web Developer based in `}
              <span className={classes['highlighted-text']}>BC, Canada</span>.
            </p>
            <p>
              {`I specialize in `}
              <span className={classes['highlighted-text']}>React</span>
              {` and `}
              <span className={classes['highlighted-text']}>NodeJS</span>
              {`, but I also work with `}
              <span className={classes['highlighted-text']}>Python</span>.
            </p>
          </div>
          <img
            className={classes.portrait}
            src="/img/anime-midjourney-portrait.png"
            alt="AI generated image of Raph"
          />
        </div>
        <p>
          {`When I code, I often listen to `}
          <span className={classes['highlighted-text']}>Liquid DnB</span>:
        </p>
        <iframe
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          className={classes['spotify-iframe']}
          height="152"
          loading="lazy"
          src="https://open.spotify.com/embed/playlist/0wl7MGZyYsdWfZRhUdNenj?utm_source=generator"
          width="100%"
        ></iframe>
        <p>
          {`To contact me, send me an email at `}
          <span className={classes.email}>hello[at]rbarbazz.com</span>.
        </p>
      </div>
    </main>
  </Layout>
)

export default Home
