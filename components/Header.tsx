import React from 'react';
import { Button, Container } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        {/* ナビゲーションバー */}
        <nav className={styles.navbar}>
          <Link href="/">TAGUCHI SEMINAR</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/members">MEMBERS</Link>
          <Link href="/activities">ACTIVITIES</Link>
          <Link href="/apply">APPLY</Link>
          <Link href="/qna">Q & A</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/instagram">INSTAGRAM</Link>
        </nav>

        {/* 背景ビデオ */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.backgroundVideo}
        >
          <source src="/img/1058-142621439_small.mp4" type="video/mp4" />
        </video>

        {/* ヘッダーコンテンツ */}
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

      {/* セクション間の赤いライン */}
      <div className={styles.sectionBorder}></div>
    </>
  );
};

export default Header;
