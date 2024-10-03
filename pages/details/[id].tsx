import { useRouter } from 'next/router';
import { sections } from '../../components/sectionsData'; // 正しいパスでsectionsDataをインポート
import { Section } from '../../components/sectionsData'; // 型もインポート
import Image from 'next/image'; // Imageコンポーネントをインポート

export default function SectionDetails() {
  const router = useRouter();
  const { id } = router.query;

  // データがまだ読み込まれていない場合の処理
  if (!id) {
    return <div>Loading...</div>;
  }

  const section: Section | undefined = sections[Number(id)]; // idに基づいてデータを取得

  // 該当するセクションが存在しない場合のエラーハンドリング
  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <div>
      <h1>{section.title}</h1>
      <p>{section.content}</p>
      <div>
        {section.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${section.title} image ${index}`}
            width={400}
            height={300}
            className="responsive-image"
          />
        ))}
      </div>
    </div>
  );
}
