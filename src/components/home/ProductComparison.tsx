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
    feature: 'Plex-style folders',
    jellyfin:
      'The next major version adds support for common Plex-style movie and show layouts, so many switchers can test against the same media paths first.',
    plex: 'Your library already works there, but staying means accepting the pricing, account, and privacy tradeoffs.',
    winner: 'Less migration friction'
  },
  {
    feature: 'Watch history privacy',
    jellyfin: 'Viewing history stays on your server instead of becoming a social feed.',
    plex: 'Discover Together drew backlash after activity emails surfaced watch activity to Plex friends and family.',
    winner: 'No surprise activity emails'
  },
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
    value: 'Local',
    label: 'Watch history by default'
  },
  {
    value: 'No',
    label: 'Required Jellyfin cloud account'
  },
  {
    value: '$0',
    label: 'Jellyfin subscription required'
  }
];

export default function ProductComparison() {
  return (
    <section
      id='jellyfin-vs-plex'
      className={clsx(styles.comparison, landingSectionStyles['landing-section'], 'padding-vert--xl')}
    >
      <div className='container'>
        <div className={clsx('row row--center text--center', styles.comparisonHeader)}>
          <div className='col col--8'>
            <p className={styles.eyebrow}>Still on Plex?</p>
            <h2>Know what you are trading away.</h2>
            <p>
              You do not have to rage-quit your current setup to ask better questions. If your media server now feels
              like a subscription funnel, compare it with Jellyfin before your next renewal or Lifetime Plex Pass
              deadline, without reworking every folder before you know whether switching is worth it.
            </p>
          </div>
        </div>

        <div className={styles.privacyCallout}>
          <strong>Your watch history should not be a growth feature.</strong>
          <p>
            Plex&apos;s 2023 Discover Together rollout triggered a backlash after weekly activity emails surprised users
            by surfacing viewing activity to Plex friends and family. A self-hosted media server should not become a
            social network unless you ask for one, and your own library should not feel like leverage.
          </p>
          <a
            href='https://www.techhive.com/article/2157803/plex-discover-together-privacy-concerns.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Read about the Plex privacy backlash
          </a>
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
