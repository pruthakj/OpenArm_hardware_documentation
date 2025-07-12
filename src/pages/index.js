import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className="text--center padding-horiz--md">
                <h2>Welcome to OpenArm v1.0 Hardware Documentation</h2>
                <p>
                  This guide will help you assemble, wire, and test OpenArm v1.0. 
                  The instructions focus on the right arm, but the left arm follows 
                  nearly identical steps.
                </p>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/intro">
                  Start Assembly Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
