'use client'

import React from "react";
import { NewsCardBigLeftItem } from '@/types/newsCardBigLeft';

import Image from 'next/image';
import Link from "next/link";

type NewsCardBigLeftProps = {
    newsCardBigLeftItems: NewsCardBigLeftItem[] | null; // Menu can be an array or null
};

export default function NewsCardBigLeft({ newsCardBigLeftItems }: NewsCardBigLeftProps) {

    if (!newsCardBigLeftItems || newsCardBigLeftItems.length === 0) {
        return <p>No menu items available.</p>;
    }

    return (
        <>
            {newsCardBigLeftItems.map((item) => (
                <div key={item.id} className="news_card mb-4">
                    <div className='flex gap-4 items-center'>
                        <div className="news_card_img_left">
                            <Link href={item.href}>
                                <Image src={item.img} alt="Logo" />
                            </Link>
                        </div>
                        <div className="news_card_left_content">
                            <Link href={item.href} className='w-fit block'>
                                <small className='news_tag'>{item.tag}</small>
                            </Link>
                            <Link href={item.href}>
                                <h3>{item.title}</h3>
                            </Link>
                            <p>{item.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
