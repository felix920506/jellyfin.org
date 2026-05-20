import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import HomepageFeatures from '../components/home/HomepageFeatures';
import ClientSection from '../components/home/ClientSection';
import CallToAction from '../components/home/CallToAction';
import FreedomSection from '../components/home/FreedomSection';
import Hero from '../components/common/Hero';
import InActionSection from '../components/home/InActionSection';

export default function Home() {
  return (
    <Layout
      title='Your Personal Media Server'
      description='The volunteer-built media solution that puts you in control of your media. Stream to any device from your own server, with no strings attached.'
    >
      <Hero title='Your Personal Media Server' large>
        <p className='hero__text margin-vert--lg'>
          Jellyfin organizes your movies, shows, music, photos, and live TV into a polished library you can stream from
          your own server, on your own terms.
        </p>
        <div className='hero__buttons'>
          <Link to='/downloads/server' className='button button--lg button--primary'>
            Download Now
          </Link>
          <a href='https://demo.jellyfin.org/stable' className='button button--lg button--secondary button--outline'>
            See it in Action
          </a>
        </div>
        <p className='hero__note'>
          <a href='/docs/general/community-standards/servers'>Note: We do not run servers for users.</a>
        </p>
      </Hero>
      <main>
        <HomepageFeatures />
        <ClientSection />
        <InActionSection />
        <FreedomSection />
        <CallToAction />
      </main>
    </Layout>
  );
}
