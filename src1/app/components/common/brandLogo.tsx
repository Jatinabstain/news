import Image from 'next/image';
import logo from '../../../../public/assets/logo.svg';
import Link from "next/link";

export default function BrandLogo() {
    return (
        <Link href="/">
            <Image
                src={logo}
                alt="Logo"
                className='logo'
            />
        </Link>
    );
}