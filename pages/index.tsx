// pages/index.tsx

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaInstagram } from 'react-icons/fa';
import Header from '../components/Header'; // Headerをインポート
import Footer from '../components/Footer'; // Headerをインポート
import CardSection from '../components/CardSection'; // Headerをインポート
import SliderSection from '../components/SliderSection'; // Headerをインポート

// Swiperのスタイルをインポート
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// カスタムCSSをインポート
import styles from '../styles/Home.module.css';

const HomePage = () => {
  useEffect(() => {
    // 必要な初期化や副作用があればここに記述
  }, []);

  const cards = [
    {
      href: 'https://example.com/card1',
      imgSrc: '/img/picture1.jpeg',
      altText: '活動内容',
      title: '活動内容',
      subtitle: 'ゼミの概要、年間スケジュールはこちら！',
    },
    // 他のカードデータを追加
  ];

  return (
    <>
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

      {/* ナビゲーションバー */}
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="light">
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: '#f05f40' }}>
            Taguchi Seminar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span className="sr-only">Toggle navigation</span>
            <span style={{ color: '#777' }}>MENU ≡</span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" navbar>
              <Nav.Link as={Link} href="/menus/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} href="/menus/members">
                Members
              </Nav.Link>
              <Nav.Link as={Link} href="/menus/activities">
                Activities
              </Nav.Link>
              <Nav.Link
                href="https://onedrive.live.com/redir.aspx?cid=de088d657a806648&resid=DE088D657A806648!2804&parId=DE088D657A806648!103&authkey=!AC6uDtWKIJG6Ilg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply
              </Nav.Link>
              <Nav.Link as={Link} href="/menus/question">
                Q &amp; A
              </Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
              <Nav.Link
                href="https://www.instagram.com/taguc_chaaan?igshid=azZlcmRrZDgyb2xq&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Instagram
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Header />

      {/* コンテンツセクション */}
      <section className={styles.content}>
        <Container>
          <h2 className={styles.sectionTitle}>大阪公立大学商学部　田口ゼミ</h2>
          <p>
            田口ゼミは<strong>モノづくり企業のイノベーション戦略と価値共創</strong>
            を研究するゼミです。
          </p>
          <p>
            ゼミ生は個性的な人が多く、みんな仲良く陽気な人が多いです！
          </p>
          <p>
            研究テーマは基本的に何でもOK​。マーケティングや経営戦略に関するテーマを設定してグループごとに活動をしています。
          </p>
          <p>
            また、定期的に工場見学をします。工場を見学するだけでなく、そこで働いている方に直接質問して、各グループのテーマ研究の参考にしています。
          </p>
          <p>
            遊ぶときは遊び、学ぶときは学ぶ活気のあるゼミです。あなたのご応募お待ちしています！
          </p>
        </Container>
      </section>

      <SliderSection />

      <CardSection cards={cards} />

      <Footer />

    </>
  );
};

export default HomePage;
