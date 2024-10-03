import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { sections } from '../components/sectionsData'; // 正しいパスを確認
import styles from '../styles/Home.module.css'; // CSSモジュールのインポート

export default function CardSection() {
  return (
    <div>
      {/* タイトルセクション */}
      <div className={styles.contentHead}>
        <h2 className={styles.ttl}>田口ゼミについて</h2>
      </div>

      {/* 赤いラインを挿入 */}
      <div className={styles.sectionBorder}></div>

      <div className={styles.cardContainer}>
        {sections.map((section, index) => (
          <Link href={`/details/${index}`} key={index}>
            <div className={styles.card}>
              <Image
                src={section.images[0]} // 各セクションの最初の画像を表示
                alt={section.title}
                width={400}
                height={300}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
