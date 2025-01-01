import { StaticImageData } from "next/image";

export type NewsCardTopItem = {
    id: string;
    img: StaticImageData;
    tag: string;
    href: string;
    content: string;
};