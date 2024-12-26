'use client'

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import styles from '@/styles/footer.module.css'
import Image from 'next/image';

const Footer = (props) => {

    const { t } = useTranslation();
    const buttonLabels = props.data;
    const sortedCategories = buttonLabels.slice().sort((a, b) => a.id - b.id);

    return (
        <footer className={styles.footer}>
            <div className={styles.footertop}>
                <div className={styles.footerleft}>
                    <Link href="/">
                        <Image src='/images/Logo.svg' width={109} height={32} loading='lazy' alt="ABC" />
                    </Link>
                    <h2>{t('mainscrtextright')}</h2>
                </div>
                <div className={styles.footerright}>
                    <div className={styles.footer1}>
                        <h3>{t('navigation')}</h3>
                        <div className={styles.footerinside}>
                            <Link href="/aggregator">
                                <p>{t('aggregator')}</p>
                            </Link>
                            <Link href="/faq">
                                <p>FAQ</p>
                            </Link>
                            <Link href="/forpartners">
                                <p>{t('forpartners')}</p>
                            </Link>
                            <Link href="/news">
                                <p>{t('news')}</p>
                            </Link>
                            <Link href="/sitemap">
                                <p>{t('sitemapbutt')}</p>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.footer3}>
                        <h3>{t('follow')}</h3>
                        <div className={styles.footerinside}>
                            <Link href="https://t.me/abcrypto_io" target="_blank" rel="noreferrer">
                                <p>Telegram</p>
                            </Link>
                            <Link href="https://twitter.com/abcryptoio" target="_blank" rel="noreferrer">
                                <p>Twitter</p>
                            </Link>
                            <Link href="https://medium.com/@abcrypto_38965" target="_blank" rel="noreferrer">
                                <p>Medium</p>
                            </Link>
                            <Link href="https://www.reddit.com/user/abcrypto_io" target="_blank" rel="noreferrer">
                                <p>Reddit</p>
                            </Link>
                            <Link href="https://www.instagram.com/abcrypto.io/" target="_blank" rel="noreferrer">
                                <p>Instagram</p>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.footer2}>
                        <h3>{t('categories')}</h3>
                        <div className={styles.foot2but}>
                            {sortedCategories.map((buttonlabel) => (
                                <span key={buttonlabel.id}>
                                    <Link href={`/${buttonlabel.slug}`}>
                                        {buttonlabel.name}
                                    </Link>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerbot}>
                <h2>{t('copyright')}</h2>
                <div className={styles.footerbotr}>
                        <Link href="/privacypolicy">{t('privacy')}</Link>
                        <Link href="/termsofuse">{t('terms')}</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
