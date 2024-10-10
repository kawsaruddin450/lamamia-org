import Button from '@/components/button/Button';
import Image from 'next/image';
import React from 'react';

const Category = ({params}) => {
    return (
        <div>
            <h1 className="my-5 text-2xl font-bold">{params.category}</h1>
            <div className="flex gap-12 items-center">
                <div className="flex-1 flex flex-col gap-8">
                    <h2 className="text-5xl font-bold">Creative Portfolio</h2>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit, sequi labore temporibus tempore consequuntur eius ratione numquam error, quis facere voluptatum? Expedita omnis molestias harum illum enim, ipsa deleniti!</p>
                    <Button url="#" text="See More"/>
                </div>
                <div className="flex-1 h-[400px] relative">
                    <Image className="w-full object-contain" fill={true} src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Portfolio Category Image"/>
                </div>
            </div>
            <div className="flex flex-row-reverse gap-12 items-center">
                <div className="flex-1 flex flex-col gap-8">
                    <h2 className="text-5xl font-bold">Creative Portfolio</h2>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit, sequi labore temporibus tempore consequuntur eius ratione numquam error, quis facere voluptatum? Expedita omnis molestias harum illum enim, ipsa deleniti!</p>
                    <Button url="#" text="See More"/>
                </div>
                <div className="flex-1 h-[400px] relative">
                    <Image className="w-full object-contain" fill={true} src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Portfolio Category Image"/>
                </div>
            </div>
            <div className="flex gap-12 items-center">
                <div className="flex-1 flex flex-col gap-8">
                    <h2 className="text-5xl font-bold">Creative Portfolio</h2>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit, sequi labore temporibus tempore consequuntur eius ratione numquam error, quis facere voluptatum? Expedita omnis molestias harum illum enim, ipsa deleniti!</p>
                    <Button url="#" text="See More"/>
                </div>
                <div className="flex-1 h-[400px] relative">
                    <Image className="w-full object-contain" fill={true} src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Portfolio Category Image"/>
                </div>
            </div>
        </div>
    );
};

export default Category;