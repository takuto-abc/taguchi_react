// components/CustomHead.tsx

import React from 'react';
import Head from 'next/head';

const CustomHead: React.FC = () => {
  return (
    <Head>
      <title>大阪公立大学　田口ゼミのホームページ</title>
      <meta
        name="description"
        content="大阪公立大学商学部商学科田口ゼミナールのホームページです。「モノづくり企業のイノベーション戦略と価値共創」を研究しています。グループワークを中心に活動しています。"
      />
      <meta
        name="keywords"
        content="ゼミ,田口,taguchizemi,大阪公立,大学,マーケティング,ものづくり,SDGs,就活,イノベーション,戦略,中小企業,taguchi,zemi"
      />
      <meta name="author" content="Takeda Seminar" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default CustomHead;
