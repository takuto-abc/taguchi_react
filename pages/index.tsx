// pages/index.tsx

import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules'; // 修正箇所
import { FaInstagram } from 'react-icons/fa';

// Swiperのスタイルをインポート
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// カスタムCSSをインポート
import styles from '../styles/Home.module.css';

// SwiperCoreのインポートと使用を削除しました

const HomePage = () => {
  useEffect(() => {
    // 必要な初期化や副作用があればここに記述
  }, []);

  return (
    <>
      {/* 省略されたコード */}
      {/* スライダーセクション */}
      <section className={styles.content}>
        <Container>
          <h2 className={styles.sectionTitle}>活動の様子を一部紹介！</h2>
          <Swiper
            modules={[Autoplay, Navigation]} // モジュールを指定
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            centeredSlides
            breakpoints={{
              767: { slidesPerView: 1 },
              991: { slidesPerView: 1 },
              992: { slidesPerView: 2 },
            }}
          >
            <SwiperSlide>
              <div className={styles.swiperBox}>
                <img src="/img/IMG_7416.jpg" alt="活動写真1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiperBox}>
                <img src="/img/IMG_7415.jpg" alt="活動写真2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiperBox}>
                <img src="/img/IMG_7419.JPG" alt="活動写真3" />
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
      {/* 省略されたコード */}
    </>
  );
};

export default HomePage;
