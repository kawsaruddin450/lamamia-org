import Button from '@/components/button/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
    return (
        <div>
            <Link href="/blog/testId" className="flex gap-12 items-center my-8">
                <div className="w-[500px] h-[300px] relative">
                    <Image className="w-full object-contain" fill={true} src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Portfolio Category Image" />
                </div>
                <div className="flex-grow flex flex-col gap-8">
                    <h2 className="text-5xl font-bold">Creative Portfolio</h2>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit, sequi labore temporibus tempore consequuntur eius ratione numquam error, quis facere voluptatum? Expedita omnis molestias harum illum enim, ipsa deleniti!</p>
                </div>
            </Link>
            <Link href="/blog/testId" className="flex gap-12 items-center my-8">
                <div className="w-[500px] h-[300px] relative">
                    <Image className="w-full object-contain" fill={true} src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Portfolio Category Image" />
                </div>
                <div className="flex-grow flex flex-col gap-8">
                    <h2 className="text-5xl font-bold">Creative Portfolio</h2>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit, sequi labore temporibus tempore consequuntur eius ratione numquam error, quis facere voluptatum? Expedita omnis molestias harum illum enim, ipsa deleniti!</p>
                </div>
            </Link>
        </div>
    );
};

export default Blog;