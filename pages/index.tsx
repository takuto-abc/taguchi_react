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
import NavigationBar from '../components/NavigationBar'; // Navbarコンポーネントをインポート
import CustomHead from '../components/CustomHead'; // CustomHeadコンポーネントをインポート

// Swiperのスタイルをインポート
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// カスタムCSSをインポート
import styles from '../styles/Home.module.css';
import ContentSection from '../components/ContentsSection';

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
    
      <CustomHead />

   
      <NavigationBar />

      <Header />

      <ContentSection />

      <SliderSection />

      <CardSection cards={cards} />

      <Footer />

    </>
  );
};

export default HomePage;
