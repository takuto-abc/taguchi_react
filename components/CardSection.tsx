// components/CardSection.tsx

import React from 'react';
import styles from '../styles/Home.module.css';

interface Card {
  href: string;
  imgSrc: string;
  altText: string;
  title: string;
  subtitle: string;
}

interface CardSectionProps {
  cards: Card[];
}

const CardSection: React.FC<CardSectionProps> = ({ cards }) => {
  return (
    <section className={styles.content}>
      <div className="container">
        <h2 className={styles.sectionTitle}>田口ゼミについて</h2>
        <ul className={styles.cardGroup}>
          {cards.map((card, index) => (
            <li className={styles.cardItem} key={index}>
              <a
                href={card.href}
                className={styles.cardLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={card.imgSrc} alt={card.altText} />
                <div className={styles.cardLabels}>
                  <h3>{card.title}</h3>
                  <p>{card.subtitle}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CardSection;
