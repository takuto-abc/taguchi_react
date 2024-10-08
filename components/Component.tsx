import { useState } from 'react';
import { sections } from '../components/sectionsData'; // 正しいパスを確認
import Image from 'next/image'; // Next.jsのImageコンポーネント
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // CSS Modulesのスタイル
import { Button, Card, CardFooter, CardHeader } from '@chakra-ui/react';
import { CardContent, CardTitle } from './ui/card';

export default function Component() {
  const [openDialog, setOpenDialog] = useState<number | null>(null); // セクションごとのダイアログ状態を管理

  const handleToggleDialog = (index: number) => {
    setOpenDialog(openDialog === index ? null : index); // 同じセクションをクリックすると閉じる
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.contentHead}>
        <h2 className={styles.ttl}>田口ゼミについて</h2>
      </div>
      <div className={styles.sectionBorder}></div>
      <div className={styles.grid}>
        {sections.map((section, index) => (
          <Card key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image
                src={section.images[0]} // セクションごとの画像を表示
                alt={section.title} // 代替テキスト
                width={400} // 画像の幅
                height={200} // 画像の高さ
                className={styles.image}
              />
            </div>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <p>{section.description}</p>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleToggleDialog(index)}
                className={styles.toggleButton}
              >
                {openDialog === index ? '詳細を閉じる' : '詳細を見る'}
              </Button>
              {openDialog === index && (
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    {section.content}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Link href={section.link}>
                <a className="text-sm text-primary hover:underline">
                  もっと詳しく
                </a>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
