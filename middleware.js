import { NextResponse } from "next/server";
import { i18n } from "./i18n-config"; // импорт вашей конфигурации локализации
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request) {
  // Transform headers to a plain object as Negotiator expects
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales; // доступ к доступным локалям

  // Use Negotiator and intl-localematcher to get the best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );
  const locale = matchLocale(languages, locales, i18n.defaultLocale); // match locale, default to i18n.defaultLocale if no match

  return locale;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If no locale found in the pathname, redirect to default locale or fallback to 'en-US' if not available
  if (pathnameIsMissingLocale) {
    const locale = i18n.locales.includes(i18n.defaultLocale)
      ? i18n.defaultLocale
      : "en-US"; // Fallback to 'en-US' if the default locale is not in the locales list

    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
