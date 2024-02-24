// Footer.tsx
import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>Your Logo</div>
        <div className={styles.info}>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <p>Contact us: info@example.com</p>
        </div>
        <div className={styles.social}>
          <a href="#" className={styles.socialIcon}>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className={styles.socialIcon}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className={styles.socialIcon}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
