import React from 'react';
import Image from 'next/image'; // Next.jsのImageコンポーネントをインポート
import { FaInstagram } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <>
      <p className={styles.text}>インスタグラムはこちらから！</p>
      <a
        href="https://www.instagram.com/taguc_chaaan?igsh=azZlcmRrZDgyb2xq&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconLink}
      >
        {/* imagesディレクトリのアイコン画像を使用 */}
        <Image
          src="/images/instagram_icon copy.png" // imagesディレクトリ内の画像を指定
          alt="Instagram Icon"
          width={40}
          height={40}
        />
      </a>
      <p className={styles.username}>@taguc_chaaan</p>
    </>
  </footer>
);

export default Footer;
