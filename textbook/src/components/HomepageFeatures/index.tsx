import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Textbook',
    Svg: require('@site/static/img/undraw_notebook_re_id0r.svg').default,
    description: (
      <>
        Visit the <a href={"docs/forward"}>online textbook</a>.
      </>
    ),
  },
  {
    title: 'Code Examples',
    Svg: require('@site/static/img/undraw_pair_programming_re_or4x.svg').default,
    description: (
      <>
        Goto the <a href='https://github.com/Mr-Coxall/Computer-Based-Problem-Solving-Textbook/tree/main/code-examples'>GitHub repo</a> that has all the code examples.
      </>
    ),
  },
  {
    title: 'GitHub Repo',
    Svg: require('@site/static/img/undraw_code_typing_re_p8b9.svg').default,
    description: (
      <>
        This textbook can be found on <a href='https://github.com/Mr-Coxall/Computer-Based-Problem-Solving-Textbook'>GitHub</a>.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
