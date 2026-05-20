import clsx from 'clsx';
import React from 'react';

import landingSectionStyles from './LandingSection.module.scss';
import styles from './ProductComparison.module.scss';

type ComparisonRow = {
  feature: string;
  jellyfin: string;
  plex: string;
  winner: string;
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Cost to run your server',
    jellyfin: 'Free server, free official clients, no hidden fees.',
    plex: 'Free tier, with several personal-media features reserved for paid plans.',
    winner: 'No subscription tax'
  },
  {
    feature: 'Hardware transcoding',
    jellyfin: 'Included for supported GPUs and platforms.',
    plex: 'Premium Plex Pass feature, except for a few special devices.',
    winner: 'Performance without a paywall'
  },
  {
    feature: 'Remote streaming',
    jellyfin: 'Your server, your network, your remote access setup.',
    plex: 'Remote personal-video streaming requires Plex Pass or Remote Watch Pass on the viewer or server admin account.',
    winner: 'No remote-watch toll'
  },
  {
    feature: 'Live TV and DVR',
    jellyfin: 'Watch and record with supported tuners and guide data.',
    plex: 'DVR recording is part of Plex Pass.',
    winner: 'DVR stays included'
  },
  {
    feature: 'Account dependency',
    jellyfin: 'No Jellyfin cloud account is required to run your own server.',
    plex: 'Many TV and console apps only work when both app and server are signed in to Plex.',
    winner: 'Self-hosted means self-hosted'
  },
  {
    feature: 'Code and control',
    jellyfin: 'GPL-licensed free software developed by a volunteer community.',
    plex: 'Commercial software with license restrictions on source access and modification.',
    winner: 'Fork it, audit it, improve it'
  }
];

const statCards = [
  {
    value: '$0',
    label: 'Jellyfin subscription required'
  },
  {
    value: 'GPL',
    label: 'Free software license'
  },
  {
    value: 'Yours',
    label: 'Server, data, and choices'
  }
];

export default function ProductComparison() {
  return (
    <section className={clsx(styles.comparison, landingSectionStyles['landing-section'], 'padding-vert--xl')}>
      <div className='container'>
        <div className={clsx('row row--center text--center', styles.comparisonHeader)}>
          <div className='col col--8'>
            <p className={styles.eyebrow}>Jellyfin vs Plex</p>
            <h2>Same media library idea. Very different deal.</h2>
            <p>
              Plex is polished, but its best personal-media features increasingly sit behind accounts and paid plans.
              Jellyfin keeps the media server model simple: install it, own it, and keep the useful parts included.
            </p>
          </div>
        </div>

        <div className={styles.stats}>
          {statCards.map(({ value, label }) => (
            <div key={label} className={styles.statCard}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className={styles.tableShell}>
          <table className={styles.comparisonTable}>
            <caption>Jellyfin and Plex personal media server comparison</caption>
            <thead>
              <tr>
                <th scope='col'>What matters</th>
                <th scope='col'>Jellyfin</th>
                <th scope='col'>Plex</th>
                <th scope='col'>Jellyfin edge</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(({ feature, jellyfin, plex, winner }) => (
                <tr key={feature}>
                  <th scope='row'>{feature}</th>
                  <td className={styles.jellyfinCell}>{jellyfin}</td>
                  <td>{plex}</td>
                  <td>
                    <span className={styles.winnerBadge}>{winner}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
