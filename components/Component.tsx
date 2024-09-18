import { useState } from 'react';
import { sections } from './CardSection'; // データのインポート
import Image from 'next/image'; // Next.jsのImageコンポーネント

export default function Component() {
  const [openDialog, setOpenDialog] = useState<number | null>(null); // セクションごとのダイアログ状態を管理

  const handleToggleDialog = (index: number) => {
    setOpenDialog(openDialog === index ? null : index); // 同じセクションをクリックすると閉じる
  };

  return (
    <div>
      {/* sections データを使ってコンテンツをレンダリング */}
      {sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          <button onClick={() => handleToggleDialog(index)}>
            {openDialog === index ? 'Close' : 'Open'} Details
          </button>
          {openDialog === index && (
            <div>
              <div>{section.content}</div>
              {section.images.map((image, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={image}
                  alt={section.title}
                  width={300}
                  height={200}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
