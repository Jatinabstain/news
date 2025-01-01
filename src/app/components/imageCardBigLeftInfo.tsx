'use client'

import React from "react";
import { NewsCardBigLeftInfoItem } from '@/types/newsCardBigLeftInfo';

import Image from 'next/image';
import Link from "next/link";
import { ClockIcon } from '@heroicons/react/24/outline';

type NewsCardBigLeftInfoProps = {
    newsCardBigLeftInfoItems: NewsCardBigLeftInfoItem[] | null; // Menu can be an array or null
};

export default function NewsCardBigLeftInfo({ newsCardBigLeftInfoItems }: NewsCardBigLeftInfoProps) {

    if (!newsCardBigLeftInfoItems || newsCardBigLeftInfoItems.length === 0) {
        return <p>No menu items available.</p>;
    }

    return (
        <>
            {newsCardBigLeftInfoItems.map((item) => (
                <div key={item.id} className="news_card news_card_info mb-4">
                    <div className='flex md:flex-row flex-col gap-4 items-center'>
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
                            <p className='news_date'><ClockIcon /> {item.date}</p>
                            <p>{item.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
