import Image from 'next/image';
import logo from '@/public/logo/logo_main.png';
import Link from 'next/link';
import styles from '@/components/@shared/Header/Header.module.scss';
import UserMenu from './UserMenu';
import MobileUserMenu from './MobileUserMenu';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <Image src={logo} alt={'메인 로고 이미지'} height={30} width={107} />
      </Link>

      <section className={styles.nav}>
        <UserMenu />
      </section>

      <section className={styles.navMobile}>
        <MobileUserMenu />
      </section>
    </header>
  );
}
