import { AppShell } from '@mantine/core';
import { HeaderSearch } from "@/components/Header"
import { FooterCentered } from "@/components/Footer"

function DefaultLayout({ children ,noFooter}) {
    return (
        <>
            <HeaderSearch></HeaderSearch>
            <FooterCentered></FooterCentered>
        </>
    )
}

export default DefaultLayout;