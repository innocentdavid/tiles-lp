"use client";

import React, { useEffect, useRef, useState } from 'react'

export default function Videos() {
    const video1Ref = useRef(null)
    const video2Ref = useRef(null)
    const [isInViewport, setIsInViewport] = useState(false);

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.5, // Trigger when 50% of the video is in the viewport
        };

        const observer = new IntersectionObserver(([entry]) => {
            setIsInViewport(entry.isIntersecting);
        }, options);

        if (video1Ref.current) {
            observer.observe(video1Ref.current);
        }
        if (video2Ref.current) {
            observer.observe(video2Ref.current);
        }

        return () => {
            if (video1Ref.current) {
                observer.unobserve(video1Ref.current);
            }

            if (video2Ref.current) {
                observer.unobserve(video2Ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInViewport && video1Ref.current) {
            video1Ref.current.play().catch(error => {
                // Handle any errors
                console.error('Failed to play video:', error);
            });
        }
        if (isInViewport && video2Ref.current) {
            video2Ref.current.play().catch(error => {
                // Handle any errors
                console.error('Failed to play video:', error);
            });
        }
    }, [isInViewport]);

    return (
        <div className="w-[100%] p-[40px] box-border bg-[#030c08] border-solid border-[rgba(255,255,255,.06)] border-[1px] rounded-[40px]">
            <div className="hidden md:block">
                <video ref={video1Ref} autoPlay={true} loop={true} playsInline={true}><source src="/videos/product-demo-tiles-bio.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="rounded-xl md:hidden">
                <video ref={video2Ref} autoPlay={true} loop={true} playsInline={true}><source src="/videos/product-demo-mobile-tiles-bio.mp4" type="video/mp4" /> Your browser does not support the video tag. </video>
            </div>
        </div>
    )
}
