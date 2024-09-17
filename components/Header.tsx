// components/Header.tsx

import React from 'react';
import { Button } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.backgroundVideo}
      >
        <source src="/img/1058-142621439_small.mp4" type="video/mp4" />
      </video>
      <div className={styles.headerContent}>
        <div className={styles.headerContentInner}>
          <h1>
            大阪公立大学
            <br />
            商学部 田口ゼミ
          </h1>
          <hr />
          <p>
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
            style={{
              borderRadius: '15px',
              backgroundColor: '#b80000',
              color: 'white',
              borderColor: '#b80000',
            }}
          >
            現在、ゼミの研究に関するアンケート調査を実施しています！
            <br />
            ご協力よろしくお願いします！
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
