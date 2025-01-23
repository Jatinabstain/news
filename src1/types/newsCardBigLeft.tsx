import { StaticImageData } from "next/image";

export type NewsCardBigLeftItem = {
    id: string;
    img: StaticImageData;
    tag: string;
    title: string;
    href: string;
    content: string;
};