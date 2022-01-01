import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Icon from '../public/icon.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { animated, useTransition, config } from 'react-spring';
import { useRouter } from 'next/router';

export default function Home() {
  const [isVisible, setVisibility] = useState(false)
  const router = useRouter()
  const transition = useTransition(isVisible, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1},
    leave: {x: 100, y: 800, opacity: 0},
    config: config.default
  })
  const textTransition = useTransition(isVisible, {
    from: { x: -500, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1},
    leave: {x: 500, y: 0, opacity: 0},
    config: config.wobbly
  })

  useEffect(() => {
    setVisibility(true)
  }, [])

	return (
		<div className={styles.container}>
			<Head>
				<title>Bob's Projects</title>
				<meta name="description" content="Some projects made by a random person" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.nav}>
				<div className={styles.sub}>
					<Image src={Icon} alt="e" className={styles.svg} width="35" height="35" />
					<div className={styles.title} onClick={() => {
              alert('ur already here!!')
             }}>Bob&apos;s Projects</div>
				</div>
			</div>

			<div className={styles.main} >
        {textTransition((style, item) => 
          item ? (
            <animated.div className={styles.textContainer} style={style}>
            <div className={styles.left}>
           <div>Newest Project!</div>
           </div>
           <div className={styles.right}>
             <div onClick={() => {
              setVisibility(false)
              setTimeout(() => {
                router.push('/list')
              }, 1000)
             }} className={styles.link}>View More</div>
           </div>
         </animated.div>
          ) : '')}

      {transition((style, item) => 
        item ? (
          <animated.div className={styles.image} style={style}>
            <h2 className={styles.projectTitle}>Snake Game!</h2>
          </animated.div>
         ) : ''
      )}
		</div>
    </div>
	);
}
