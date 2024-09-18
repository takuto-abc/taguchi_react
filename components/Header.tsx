import React from 'react';
import { Button, Container } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a href="/">TAGUCHI SEMINAR</a>
          <a href="/about">ABOUT</a>
          <a href="/members">MEMBERS</a>
          <a href="/activities">ACTIVITIES</a>
          <a href="/apply">APPLY</a>
          <a href="/qna">Q & A</a>
          <a href="/contact">CONTACT</a>
          <a href="/instagram">INSTAGRAM</a>
        </nav>
        <Container className={styles.headerContent}>
          <h1 className={styles.sectionTitle}>
            大阪公立大学
            <br />
            商学部 田口ゼミ
          </h1>
          <p className={styles.headerText}>
            ここは大阪公立大学商学部商学科田口ゼミナールのホームページです。
            <br />
            「モノづくり企業のイノベーション戦略と価値共創」を研究しています。
            <br />
            グループワークを中心に、サブゼミ、本ゼミという形式で研究活動を行っています。
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/shinjosho"
            className={styles.headerButton}
          >
            志望理由書の提出はここから！
            <br />
            皆さんのご応募、お待ちしております！
          </Button>
        </Container>
      </header>

      <div className={styles.sectionBorder}></div> {/* 赤いラインを追加 */}
    </>
  );
};

export default Header;
