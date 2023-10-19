import { AppShell } from '@mantine/core';
import { HeaderSearch } from '@/components/Header';
import { FooterCentered } from '@/components/Footer';

function DefaultLayout({ children, noFooter }) {
  return (
    <>
      <HeaderSearch />
      <FooterCentered />
    </>
  );
}

export default DefaultLayout;
