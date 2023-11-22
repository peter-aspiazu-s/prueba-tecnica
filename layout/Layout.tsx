import Head from "next/head";
import { FC, ReactNode } from "react";
import { HeaderComponent } from '../components/header/HeaderComponent';
import { FooterComponent } from '../components/footer/FooterComponent';

interface LayoutProps {
    title: string;
    description: string;
    keywords: string;
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({title, description, keywords, children}) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Head>

        <HeaderComponent />

        {children}

        <FooterComponent />
    </>
  )
}
