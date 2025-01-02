import { i18n } from "../../../i18n-config";
import './globals.css'

export const metadata = {
  title: "i18n within app router - Vercel Examples",
  description: "How to do i18n in Next.js 15 within app router",
};

export async function generateStaticParams() {
  return i18n.locales.map(function (locale) {
    return { lang: locale };
  });
}

export default async function Root(props) {
  const params = await props.params;
  const children = props.children;

  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
