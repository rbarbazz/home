import Layout from '@theme/Layout'
import React from 'react'

import Highlight from '../components/Highlight'
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
        <p>
          {`When I code, I often listen to `}
          <Highlight>Liquid DnB</Highlight>:
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
        <p>
          Here are some of the latest things I built:
          <ul>
            <li>
              <a href="https://nozerodays.rbarbazz.com/" target="_blank">
                No Zero Days
              </a>
              : a reading tracker built with <Highlight>AlpineJS</Highlight>
              {` and `}
              <Highlight>TailwindCSS</Highlight>.
            </li>
            <li>
              <a href="https://journaling.rbarbazz.com" target="_blank">
                Daily Journaling Prompt
              </a>
              : a static site that updates itself every day with a random
              journaling prompt, using <Highlight>Github Actions</Highlight>.
            </li>
            <li>
              <a href="https://github.com/rbarbazz/pals" target="_blank">
                Pals
              </a>
              : a mobile app built with <Highlight>React Native</Highlight>
              {` and `}
              <Highlight>Expo</Highlight> that helps you stay connected with
              your friends and family.
            </li>
          </ul>
        </p>
        <p>
          I don't <a href="/blog">blog</a> these days but you're welcome to
          check out my old posts.
        </p>
      </div>
    </main>
  </Layout>
)

export default Home
