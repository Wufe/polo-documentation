import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@docusaurus/theme-classic/lib/theme/hooks/useThemeContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageExplanation from '../components/HomepageExplanation';
import Spacer from '../components/Spacer';
import Logo from '../components/Logo';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Logo />
        <div className={styles.actions}>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Getting started
          </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="https://polo-testserver.bembi.dev">
              Demo
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
  }

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Homepage"
      description="Git-based reverse proxy">
      <HomepageHeader />
      <main>
        <HomepageExplanation />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
