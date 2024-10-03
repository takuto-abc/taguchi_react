// pages/index.tsx

import { useEffect } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
// import { FaInstagram } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Component from '../components/Component';
import SliderSection from '../components/SliderSection';
import NavigationBar from '../components/NavigationBar';
import CustomHead from '../components/CustomHead';

// Swiperのスタイルをインポート
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// カスタムCSSをインポート
// import styles from '../styles/Home.module.css';
import ContentSection from '../components/ContentsSection';
// import CardSection from '@/components/CardSection';

const HomePage = () => {
  useEffect(() => {
    // 必要な初期化や副作用があればここに記述
  }, []);

  return (
    <>
      <CustomHead />

      <NavigationBar />

      <Header />

      <ContentSection />

      <SliderSection />

      <Component />

      <Footer />
    </>
  );
};

export default HomePage;
