import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Icon from '../public/icon.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { animated, useTransition, config } from 'react-spring';
import { useRouter } from 'next/router';

export default function Home() {
    const [anim, setAnim] = useState(false)
    useEffect(() => {
        setAnim(true)
    }, [])
    const router = useRouter()
	const projects = [
		{
			name: 'Snake',
			description:
				'A classic snake game. Features include gradually increasing speed, colour change, hacks, and weird death messages. Good luck. ',
			url: 'https://smake.netlify.app/',
			index: 0,
		},
	];
    const transition = useTransition(anim, {
        from: { x: -100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 100, y: 0, opacity: 0 },
        config: config.stiff
    });
	return (
		<div className={styles.container}>
			<Head>
				<title>Bob&apos;s Projects</title>
				<meta name="description" content="Some projects made by a random person" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.nav}>
				<div className={styles.sub}>
					<Image src={Icon} alt="e" className={styles.svg} width="35" height="35" />
					<div onClick={() => {
              setAnim(false)
              setTimeout(() => {
                router.push('/')
              }, 1000)
             }} className={styles.title}>Bob&apos;s Projects</div>
				</div>
			</div>

			<ul className={styles.listMain}>
				{projects.map((curr, index) => {
					return (
						<li style={{ listStyle: 'none' }} key={index}>
							{transition(
								(style, item) =>
									item ? (
										<animated.a href={curr.url} className={styles.wrapper} style={style}>
											<div className={`${styles['imgWrapper']} ${styles[`img${curr.index}`]}`}></div>
											<div className={styles.textWrapper}>
												<h1>{curr.name}</h1>
												<p>{curr.description}</p>
											</div>
										</animated.a>
									) : (
										''
									)
							)}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
