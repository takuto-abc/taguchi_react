import { useState } from 'react';
import { sections } from '../components/sectionsData'; // 正しいパスを確認
import Image from 'next/image'; // Next.jsのImageコンポーネント
import styles from '../Home.module.css'; // スタイルをインポート

export default function Component() {
  const [openDialog, setOpenDialog] = useState<number | null>(null); // セクションごとのダイアログ状態を管理

  const handleToggleDialog = (index: number) => {
    setOpenDialog(openDialog === index ? null : index); // 同じセクションをクリックすると閉じる
  };

  return (
    <div className={styles.container}>
      {/* sections データを使ってコンテンツをレンダリング */}
      {sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.title}>{section.title}</h2>
          <p className={styles.description}>{section.description}</p>
          <button onClick={() => handleToggleDialog(index)} className={styles.toggleButton}>
            {openDialog === index ? 'Close' : 'Open'} Details
          </button>
          {openDialog === index && (
            <div className={styles.dialog}>
              <div className={styles.content}>{section.content}</div>
              <div className={styles.imageContainer}>
                {section.images.map((image, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={image}
                    alt={section.title}
                    width={300}
                    height={200}
                    className={styles.image}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
