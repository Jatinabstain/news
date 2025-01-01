'use client'

import React from "react";
import { NewsListItem } from '@/types/newslist';

import Link from "next/link";

type NewsListItemProps = {
    newsListItems: NewsListItem[] | null; // Menu can be an array or null
};

export default function NewsList({ newsListItems }: NewsListItemProps) {

    if (!newsListItems || newsListItems.length === 0) {
        return <p>No menu items available.</p>;
    }

    return (
        <>
            {newsListItems.map((item) => (
                <div key={item.id} className="news_list_item pr-2">
                    <div className="news_list_content flex gap-x-2 items-start">
                        <div className="point"></div>
                        <Link href={item.href}>
                            <h3>{item.title}</h3>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}
