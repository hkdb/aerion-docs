import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Lightweight & Efficient',
    icon: '🪶',
    description: (
      <>
        Built with Wails and Svelte, not Electron. Minimal CPU, RAM, and battery
        consumption so your computer stays fast.
      </>
    ),
  },
  {
    title: 'Linux First',
    icon: '🐧',
    description: (
      <>
        Designed as a first-class citizen for Linux. Also works great on macOS
        and Windows.
      </>
    ),
  },
  {
    title: 'Modern & Independent',
    icon: '🎨',
    description: (
      <>
        Clean, intuitive interface with dark mode. No dependency on Gnome Online
        Accounts or other system services.
      </>
    ),
  },
  {
    title: 'Privacy Focused',
    icon: '🔒',
    description: (
      <>
        Your emails stay on your computer. Direct IMAP/SMTP connection to your
        provider. Basic tracking element removal built-in.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
