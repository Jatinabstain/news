"use client";
import React from "react";
import Image from "next/image";
import sliderImage from "../../../public/assets/e1.jpg";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';

export default function TopPicks() {
    return (
        <div className="slider_card">
            {/* Swiper Component */}
            <Swiper
                autoplay={true}
                loop={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
                
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="top_pick_Card">
                        <div className="top_pick_img">
                            <Image src={sliderImage} alt="e1" />
                        </div>
                        <div className="top_pick_content">
                            <h3>Is Rahul Gandhi trying to send a symbolic message by wearing blue today? Know here</h3>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="top_pick_Card">
                        <div className="top_pick_img">
                            <Image src={sliderImage} alt="e1" />
                        </div>
                        <div className="top_pick_content">
                            <h3>Is Rahul Gandhi trying to send a symbolic message by wearing blue today? Know here</h3>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
