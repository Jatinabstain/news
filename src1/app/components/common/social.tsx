import Link from "next/link";
import Image from "next/image";
import Facebook from "../../../../public/assets/facebook.png";
import Youtube from "../../../../public/assets/youtube.png";
import Twitter from "../../../../public/assets/twitter.png";
import Whatsapp from "../../../../public/assets/whatsapp.png";

export default function Social() {
    return (
        <div className="socail_media">
            <div className="flex flex-wrap justify-between gap-x-[15px]">
                <Link href="https://www.facebook.com" target="_blank">
                    <Image
                        src={Facebook}
                        alt="Facebook"
                        className="social-icon"
                    />
                </Link>
                <Link href="https://www.youtube.com" target="_blank">
                    <Image
                        src={Youtube}
                        alt="Youtube"
                        className="social-icon"
                    />
                </Link>
                <Link href="https://www.twitter.com" target="_blank">
                    <Image
                        src={Twitter}
                        alt="Twitter"
                        className="social-icon"
                    />
                </Link>
                <Link href="https://www.whatsapp.com" target="_blank">
                    <Image
                        src={Whatsapp}
                        alt="Whatsapp"
                        className="social-icon"
                    />
                </Link>
            </div>
        </div>
    );
}
