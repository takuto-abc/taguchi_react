// components/SliderSection.tsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import styles from '../styles/Home.module.css';

const SliderSection: React.FC = () => {
  return (
    <section className={styles.content}>
      <div className="container">
        <h2 className={styles.sectionTitle}>活動の様子を一部紹介！</h2>
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          centeredSlides
          breakpoints={{
            767: { slidesPerView: 1, spaceBetween: 0 },
            991: { slidesPerView: 1, spaceBetween: 0 },
            992: { slidesPerView: 2, spaceBetween: 0 },
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
      </div>
    </section>
  );
};

export default SliderSection;
