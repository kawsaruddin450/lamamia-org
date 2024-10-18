import Button from '@/components/button/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: "no-store",
    });

    if(!res.ok){
        throw new Error("Failed to fetch data!");
    }
    return res.json();
}

const Blog = async () => {
    const data = await getData();

    return (
        <div>
            {data.map(item => <Link key={item.id} href={`/blog/${item.id}`} className="flex gap-12 items-center my-8">
                <div className="w-[500px] h-[300px] relative">
                    <Image className="w-full object-contain" fill={true} src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Portfolio Category Image" />
                </div>
                <div className="flex-grow flex flex-col gap-8">
                    <h2 className="text-5xl font-bold">{item.title}</h2>
                    <p className="text-xl">{item.body}</p>
                </div>
            </Link>)}
        </div>
    );
};

export default Blog;