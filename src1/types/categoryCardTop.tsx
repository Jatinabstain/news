import { StaticImageData } from "next/image";

export type CategoryCardTopItem = {
    id: string;
    img: StaticImageData;
    tag: string;
    category: string;
    href: string;
    title: string;
};