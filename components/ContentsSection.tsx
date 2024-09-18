import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

const ContentSection: React.FC = () => {
  return (
    <>
      <section className={styles.content}>
        <Container>
          <h2 className={styles.sectionTitle}>大阪公立大学商学部 田口ゼミ</h2>
          <p>
            田口ゼミは
            <strong>モノづくり企業のイノベーション戦略と価値共創</strong>
            を研究するゼミです。
          </p>
          <p>ゼミ生は個性的な人が多く、みんな仲良く陽気な人が多いです！</p>
          <p>
            研究テーマは基本的に何でもOKです。マーケティングや経営戦略に関するテーマを設定してグループごとに活動をしています。
          </p>
          <p>
            また、定期的に工場見学をします。工場を見学するだけでなく、そこで働いている方に直接質問して、各グループのテーマ研究の参考にしています。
          </p>
          <p>
            遊ぶときは遊び、学ぶときは学ぶ活気のあるゼミです。あなたのご応募お待ちしています！
          </p>
        </Container>
      </section>
      <div className={styles.sectionBorder}></div> {/* 赤いラインを追加 */}
    </>
  );
};

export default ContentSection;
