'use client'

import React from "react";
import { CategoryCardTopItem } from '@/types/categoryCardTop';

import Image from 'next/image';
import Link from "next/link";

type CategoryCardProps = {
    categoryCardTopItems: CategoryCardTopItem[] | null; // Menu can be an array or null
};

export default function CategoryCard({ categoryCardTopItems }: CategoryCardProps) {

    if (!categoryCardTopItems || categoryCardTopItems.length === 0) {
        return <p>No menu items available.</p>;
    }

    return (
        <>
            {categoryCardTopItems.map((item) => (
                <div key={item.id} className="news_card">
                    {item.category && (
                        <div className="heading_category no_lines">
                            <div className="point"></div>
                            <h2>{ item.category }</h2>
                        </div>
                    )}
                    <div className="news_card_img_top category_card_img">
                        <Link href={item.href}>
                            <Image src={item.img} alt="Logo" />
                        </Link>
                    </div>
                    <div className="news_card_top_content">
                        <Link href={item.href} className='w-fit block'>
                            <small className='news_tag'>{item.tag}</small>
                        </Link>
                        <Link href={item.href}>
                            <p>{item.title}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
