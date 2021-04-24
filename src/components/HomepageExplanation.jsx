import React from 'react';
import clsx from 'clsx';
import styles from './HomepageExplanation.module.css'
import Spacer from './Spacer';

export default function HomepageExplanation() {
    return <section>
        <div className="container">
            <div className={clsx("row", styles.content)}>
                <h2>What is it?</h2>
                <p>
                    Polo is a task runner and a reverse-proxy.
                </p>
                {/* <hr className={styles.hr} /> */}
                <Spacer height={20} />
                <h2 className="">Its purpose</h2>
                <p>
                    Polo was designed to accomplish one simple task: provide multiple staging and QA environments for an application.
                </p>
                {/* <hr className={styles.hr} /> */}
                <Spacer height={20} />
                <h2>How does it work</h2>
                <p>
                    It continuously fetches a git repository.<br />
                    If requested, a specific commit gets built and its application gets started, executing previously configured commands.<br />
                    The application gets indexed in a list of available sessions and the user can connect to it.
                </p>
            </div>
        </div>
    </section>
}