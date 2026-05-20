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
      title='Switch from Plex to Jellyfin'
      description='Plex Pass prices are climbing. Take your media library back with Jellyfin, the free software media server that keeps your files, watch history, and server under your control.'
    >
      <Hero title='Leaving Plex? Take Your Library Back.' large>
        <p className='hero__eyebrow'>Plex refugees welcome. Your media should never become leverage.</p>
        <p className='hero__text margin-vert--lg'>
          With Lifetime Plex Pass set to jump to $749.99 on July 1, it is fair to ask why access to your own media keeps
          coming with more toll booths. Jellyfin is the free, self-hosted way to keep your library, watch history,
          hardware transcoding, live TV, and remote access setup under your control.
        </p>
        <div className='hero__buttons'>
          <Link to='/downloads/server' className='button button--lg button--primary'>
            Switch to Jellyfin
          </Link>
          <a href='#jellyfin-vs-plex' className='button button--lg button--secondary button--outline'>
            Compare with Plex
          </a>
        </div>
        <p className='hero__note'>
          No subscription tiers. No central media account requirement. No hostage vibes.{' '}
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
