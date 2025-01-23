import { StaticImageData } from "next/image";

export type NewsCardBigLeftSmallItem = {
    id: string;
    img: StaticImageData;
    tag: string;
    title: string;
    href: string;
};