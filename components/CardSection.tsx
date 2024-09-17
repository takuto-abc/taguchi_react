import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InstagramIcon } from "lucide-react";

export default function CardSection() {
  const sections = [
    {
      title: "活動内容",
      description: "ゼミの概要、年間スケジュールはこちら！",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "ゼミ生について",
      description: "現3回生のプロフィールはこちら！",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "過去の活動",
      description: "課外活動、合宿など過去の活動はこちら！",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Q & A",
      description: "説明会等でいただいた質問と回答はこちら！",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "お問い合わせ",
      description: "ゼミに関するお問い合わせはこちら！",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "選考",
      description: "田口ゼミの選考についてはこちらから！",
      image: "/placeholder.svg?height=200&width=400"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-primary">TAGUCHI SEMINAR</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>ABOUT</li>
            <li>MEMBERS</li>
            <li>ACTIVITIES</li>
            <li>APPLY</li>
            <li>Q & A</li>
            <li>CONTACT</li>
            <li><InstagramIcon className="h-5 w-5" /></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2 className="text-3xl font-bold text-center my-8">田口ゼミについて</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="p-0">
                <img src={section.image} alt={section.title} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-xl mb-2">{section.title}</CardTitle>
                <p className="text-muted-foreground">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
