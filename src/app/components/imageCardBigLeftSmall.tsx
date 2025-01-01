'use client'

import React from "react";
import { NewsCardBigLeftSmallItem } from '@/types/newsCardBigLeftSmall';

import Image from 'next/image';
import Link from "next/link";

type NewsCardBigLeftSmallProps = {
    newsCardBigLeftSmallItems: NewsCardBigLeftSmallItem[] | null; // Menu can be an array or null
};

export default function NewsCardBigLeftSmall({ newsCardBigLeftSmallItems }: NewsCardBigLeftSmallProps) {

    if (!newsCardBigLeftSmallItems || newsCardBigLeftSmallItems.length === 0) {
        return <p>No menu items available.</p>;
    }

    return (
        <>
            {newsCardBigLeftSmallItems.map((item) => (
                <div key={item.id} className="news_card mb-4">
                    <div className='flex gap-3 items-center'>
                        <div className="news_card_img_left_small">
                            <Link href={item.href}>
                                <Image src={item.img} alt="Logo" />
                            </Link>
                        </div>
                        <div className="news_card_left_content_small">
                            <Link href={item.href} className='w-fit block'>
                                <small className='news_tag'>{item.tag}</small>
                            </Link>
                            <Link href={item.href}>
                                <h3>{item.title}</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
