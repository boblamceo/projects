import React from 'react';
import { animated, useTransition, config } from 'react-spring';
import styles from '../styles/Home.module.css';

const ListItem = ({curr, anim, index}) => {
    console.log(curr, anim, index)
    const transition = useTransition(anim, {
        from: { x: -100, y: 0, opacity: 0 },
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 100, y: 0, opacity: 0 },
        config: config.stiff
    });

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
}
 
export default ListItem;