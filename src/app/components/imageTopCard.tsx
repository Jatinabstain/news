'use client'

import {useTranslations} from 'next-intl';
import React from "react";
import { NewsCardTopItem } from '@/types/newsCardTop';

import Image from 'next/image';
import Link from "next/link";

type ImageTopCardProps = {
    newsCardTopItems: NewsCardTopItem[] | null; // Menu can be an array or null
};

export default function ImageTopCard({ newsCardTopItems }: ImageTopCardProps) {
    const t = useTranslations('PageLayout');

    if (!newsCardTopItems || newsCardTopItems.length === 0) {
        return <p>No menu items available.</p>;
    }

    return (
        <>
            {newsCardTopItems.map((item) => (
                <div key={item.id} className="news_card mb-4">
                    <div className="news_card_img_top">
                        <Link href={item.href}>
                            <Image src={item.img} alt="Logo" />
                        </Link>
                    </div>
                    <div className="news_card_top_content">
                        <Link href={item.href} className='w-fit block'>
                            <small className='news_tag'>{t(item.tag)}</small>
                        </Link>
                        <Link href={item.href}>
                            <p>{t(item.content)}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
