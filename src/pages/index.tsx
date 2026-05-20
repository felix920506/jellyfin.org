import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import HomepageFeatures from '../components/home/HomepageFeatures';
import ClientSection from '../components/home/ClientSection';
import CallToAction from '../components/home/CallToAction';
import FreedomSection from '../components/home/FreedomSection';
import Hero from '../components/common/Hero';
import InActionSection from '../components/home/InActionSection';
import ProductComparison from '../components/home/ProductComparison';

export default function Home() {
  return (
    <Layout
      title='Considering Jellyfin after Plex?'
      description='Annoyed by Plex pricing, accounts, or privacy surprises? Try Jellyfin alongside your current setup and see what a free software media server feels like.'
    >
      <Hero title='Annoyed with Plex? Try Jellyfin Before You Pay Up.' large>
        <p className='hero__eyebrow'>
          Not ready to switch yet? The next major Jellyfin release lowers one of the biggest migration hurdles.
        </p>
        <p className='hero__text margin-vert--lg'>
          If Plex&apos;s pricing, account requirements, or watch-history surprises have you second-guessing the platform,
          Jellyfin gives you a low-risk way to compare. Run it beside Plex, point it at your media, and see what it feels
          like when hardware transcoding, live TV, remote access, and your watch history stay under your control. The
          next major version adds support for common Plex-style media-library folder layouts, so switching does not have
          to start with a mass rename project.
        </p>
        <div className='hero__buttons'>
          <Link to='/downloads/server' className='button button--lg button--primary'>
            Try Jellyfin Alongside Plex
          </Link>
          <a href='#jellyfin-vs-plex' className='button button--lg button--secondary button--outline'>
            See What You Get Back
          </a>
        </div>
        <p className='hero__note'>
          No subscription tiers. No central media account requirement. No mass rename project just to kick the tires.{' '}
          <a href='/docs/general/community-standards/servers'>We do not run servers for users.</a>
        </p>
      </Hero>
      <main>
        <HomepageFeatures />
        <ProductComparison />
        <ClientSection />
        <InActionSection />
        <FreedomSection />
        <CallToAction />
      </main>
    </Layout>
  );
}
