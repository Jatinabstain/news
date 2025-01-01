import Link from 'next/link';
import BrandLogo from './brandLogo';
import Social from './social';

export default function Footer() {
    return (
        <>
            <footer>
                <div className="mx-auto max-w-7xl px-2 lg:px-4">
                    <div className="footer_logo mx-auto block w-fit">
                        <BrandLogo />
                    </div>
                    <div className="popular_categories">
                        <p>Popular Categories</p>
                        <ul>
                            <li>
                                <Link href="#">Live TV</Link>
                            </li>
                            <li>
                                <Link href="#">World</Link>
                            </li>
                            <li>
                                <Link href="#">Photos</Link>
                            </li>
                            <li>
                                <Link href="#">Videos</Link>
                            </li>
                            <li>
                                <Link href="#">India</Link>
                            </li>
                            <li>
                                <Link href="#">Sports</Link>
                            </li>
                            <li>
                                <Link href="#">Bollywood</Link>
                            </li>
                            <li>
                                <Link href="#">Business</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto block w-fit">
                        <Social />
                    </div>
                </div>
            </footer>
            <div className="footer_bottom">
                <p>© 2024 News. All rights reserved.</p>
            </div>
        </>
    );
}
