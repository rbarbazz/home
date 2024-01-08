import Layout from '@theme/Layout'
import React from 'react'

import classes from '../css/home.module.css'

const Home = () => (
  <Layout
    title="Home"
    description="I'm a web developer based in Vancouver, BC."
  >
    <main className={classes.main}>
      <h2>Hi, I'm Raph</h2>
      <img
        className={classes.portrait}
        src="/img/anime-midjourney-portrait.png"
        alt="AI generated image of Raph"
      />
      <div>
        <p>
          I'm a web developer based in{' '}
          <span className={classes['highlighted-text']}>Vancouver, BC</span>. I
          specialize in{' '}
          <span className={classes['highlighted-text']}>React</span> and{' '}
          <span className={classes['highlighted-text']}>NodeJS</span>, but I
          also like to work with{' '}
          <span className={classes['highlighted-text']}>Python</span>.
        </p>
        <p>
          {' '}
          I like to listen to{' '}
          <span className={classes['highlighted-text']}>Liquid DnB</span> when I
          code:
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
          If you want to contact me, you can{' '}
          <a href="mailto:hello@raphaelbarbazza.com">send me an email</a>.
        </p>
      </div>
    </main>
  </Layout>
)

export default Home
