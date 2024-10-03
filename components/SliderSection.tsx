import React from 'react';
import Image from 'next/image';
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
          slidesPerView={1} 
          spaceBetween={0} 
        >
          <SwiperSlide>
            <div className={styles.swiperBox}>
              <img src="/images/lake.jpg" alt="活動写真1" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperBox}>
              <img src="/images/boat.jpg" alt="活動写真2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperBox}>
              <img src="/images/baseball.jpg" alt="活動写真3" />
            </div>
          </SwiperSlide>  
          <SwiperSlide>
            <div className={styles.swiperBox}>
              <img src="/images/royce.jpg" alt="活動写真4" />
            </div>
          </SwiperSlide>         
          <SwiperSlide>
            <div className={styles.swiperBox}>
              <img src="/images/heart.jpg" alt="活動写真5" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperBox}>
              <img src="/images/beel.jpg" alt="活動写真6" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.swiperBox}>
              <img src="/images/meat.jpg" alt="活動写真7" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SliderSection;
