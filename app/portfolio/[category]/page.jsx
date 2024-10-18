import Button from '@/components/button/Button';
import Image from 'next/image';
import React from 'react';
import { items } from './data';
import { notFound } from 'next/navigation';

const Category = ({ params }) => {

    const getData = (cat) => {
        const data = items[cat];

        if (data) {
            return data;
        }
        return notFound();
    }
    const data = getData(params.category);

    return (
        <div>
            <h1 className="my-5 text-2xl font-bold">{params.category}</h1>
            <div>
                {
                    data?.map(item => <div key={item.id} className={`flex gap-12 items-center ${item.id %2 === 0 ? 'flex-row-reverse' : 'flex-row'} mb-12`}>
                        <div className="flex-1 flex flex-col gap-8">
                            <h2 className="text-5xl font-bold">{item.title}</h2>
                            <p className="text-xl">{item.desc}</p>
                            <Button url="#" text="See More" />
                        </div>
                        <div className="flex-1 h-[400px] relative">
                            <Image className="w-full object-contain" fill={true} src={item.image} alt="Portfolio Category Image" />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;