// Section型を定義
export type Section = {
        title: string;
        description: string;
        content: string;
        images: string[];
        link: string;
    };
  
  // Section型に基づいたデータを定義
  export const sections: Section[] = [
    {
      title: '活動内容',
      description: 'ゼミの概要、年間スケジュールはこちら！',
      content:
        'ここに活動内容の詳細な説明が入ります。年間を通じてどのような活動を行うのか、主要なイベントや研究テーマについての情報が含まれます。',
      images: ['/images/lake.jpg'],
      link: '/activity-details',
    },
    {
      title: 'ゼミ生について',
      description: '現3回生のプロフィールはこちら！',
      content:
        'ゼミ生たちの個性豊かなプロフィールを紹介します。それぞれの研究テーマや趣味、ゼミでの役割などが詳しく書かれています。',
      images: ['/images/lake.jpg'],
      link: '/student-profiles',
    },
    {
        title: '過去の活動',
        description: '課外活動、合宿など過去の活動はこちら！',
        content:
          'ここに過去の活動の詳細な説明が入ります。これまでゼミ活動として行なってきたことについての情報が含まれます。',
        images: ['/images/lake.jpg'],
        link: '/student-profiles',
      },
      {
        title: 'Q & A',
        description: '説明会等でいただいた質問と回答はこちら！',
        content:
          'よくある質問や選考についての質問が入ります。ゼミ説明会でいただいた質問もここに含まれます。',
        images: ['/images/lake.jpg'],
        link: '/student-profiles',
      },
      {
        title: 'お問い合わせ',
        description: 'ゼミに関するお問い合わせはこちら！',
        content:
          '田口ゼミへのお問い合わせフォームが入ります。',
        images: ['/images/lake.jpg'],
        link: '/student-profiles',
      },
      {
        title: '選考',
        description: '田口ゼミの選考についてはこちらから！',
        content:
          'ゼミの選考に関する内容が書かれています。',
        images: ['/images/lake.jpg'],
        link: '/student-profiles',
      },
];