// components/Footer.tsx

// import { footer } from 'framer-motion/client';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="bg-light text-center p-4">
    <>
      <p>インスタグラムはこちらから！</p>
      <a
        href="https://www.instagram.com/taguc_chaaan?igsh=azZlcmRrZDgyb2xq&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={40} />
      </a>
      <p>@taguc_chaaan</p>
    </>
  </footer>
);

export default Footer;
