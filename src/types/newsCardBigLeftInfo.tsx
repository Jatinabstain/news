import { StaticImageData } from "next/image";

export type NewsCardBigLeftInfoItem = {
    id: string;
    img: StaticImageData;
    tag: string;
    date: string;
    title: string;
    href: string;
    content: string;
};