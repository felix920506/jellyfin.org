import Link from '@docusaurus/Link';
import React from 'react';

import styles from './CallToAction.module.scss';

export default function CallToAction() {
  return (
    <div className={styles.cta}>
      <div className='container'>
        <h2>Put Jellyfin next to Plex and compare.</h2>
        <p className={styles['cta-sub']}>
          Point Jellyfin at the media paths you already have, try the clients you care about, and decide with your own
          library. The next major release makes common Plex-style folder layouts an easier starting point.
        </p>
        <Link to='/downloads/server' className='button button--primary button--lg margin-top--lg'>
          Start a Side-by-Side Test
        </Link>
      </div>
    </div>
  );
}
