import Link from 'next/link';
import {useTranslations} from 'next-intl';
import Social from '@/app/components/common/social';
import BrandLogo from '@/app/components/common/brandLogo';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <>
            <footer>
                <div className="mx-auto max-w-7xl px-2 lg:px-4">
                    <div className="footer_logo mx-auto block w-fit">
                        <BrandLogo />
                    </div>
                    <div className="popular_categories">
                        <p>{t('Popular Categories')}</p>
                        <ul>
                            <li>
                                <Link href="#">{t('Live TV')}</Link>
                            </li>
                            <li>
                                <Link href="#">{t('World')}</Link>
                            </li>
                            <li>
                                <Link href="#">{t('Photos')}</Link>
                            </li>
                            <li>
                                <Link href="#">{t('Videos')}</Link>
                            </li>
                            <li>
                                <Link href="#">{t('India')}</Link>
                            </li>
                            <li>
                                <Link href="#">{t('Sports')}</Link>
                            </li>
                            <li>
                                <Link href="#">{t('Bollywood')}</Link>
                            </li>
                            <li>
                                <Link href="#">{t('Business')}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto block w-fit">
                        <Social />
                    </div>
                </div>
            </footer>
            <div className="footer_bottom">
                <p>© 2024 News. {t('All rights reserved')}.</p>
            </div>
        </>
    );
}
