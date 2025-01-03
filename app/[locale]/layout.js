import dynamic from 'next/dynamic';
const Form = dynamic(() => import('@/components/Form/Form'));
const Header = dynamic(() => import('@/components/Header/Header'));
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import { Inter } from 'next/font/google';
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/TranslationsProvider';
const Footer = dynamic(() => import('@/components/Footer/Footer'));
const ScrollToTopButt = dynamic(() => import('@/components/Scrolltotopbutt/Scrolltotopbutt'));
import '@/styles/global.css'
import HolyLoader from "holy-loader";
import { GoogleAnalytics } from '@next/third-parties/google'

const i18nNamespaces = ['common'];

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

// export async function generateMetadata({ params }) {
//   const locale = params.locale;
//   const { t } = await initTranslations(locale, i18nNamespaces);

//   return {
//     metadataBase: new URL('https://abcrypto.io'),
//     title: `${t('titlemain')}`,
//     description: `${t('metamain')}`,
//     alternates: {
//       canonical: `/`,
//       languages: {
//         'ru': `/ru`,
//         'ua': `/ua`,
//         'x-default':'/',
//         'en': '/'
//       }
//     },
//     openGraph: {
//       title: `${t('titlemain')}`,
//       description: `${t('metamain')}`,
//       url: `/`,
//       siteName: 'ABCrypto',
//       type: 'website',
//     }
//   }
// }

export default async function RootLayout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
      </head>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}>
        <body className={inter.className}>
          <Header />
          {children}
          <ScrollToTopButt />
          <HolyLoader color="linear-gradient(125deg, #FC6E49 0%, #D368A9 23.67%, #825DE1 45.42%, #4F77EF 71.83%, #53C6E3 100%)" height="4px" />
        </body>
        <GoogleAnalytics gaId="G-R7WJWEWG9V" />
      </TranslationsProvider>
    </html>
  );
}