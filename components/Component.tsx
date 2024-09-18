import { useState } from 'react';
import { sections } from './CardSection'; // データのインポート

export default function Component() {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  return (
    <div>
      {/* sections データを使ってコンテンツをレンダリング */}
      {sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          <div>{section.content}</div>
          {section.images.map((image, imgIndex) => (
            <img key={imgIndex} src={image} alt={section.title} />
          ))}
        </div>
      ))}
    </div>
  );
}
