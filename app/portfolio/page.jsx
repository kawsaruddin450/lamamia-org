import Link from 'next/link';
import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <h1 className="my-5 text-2xl font-bold">Choose a gallery</h1>
            <div className="flex gap-12 items-center">
                <Link href="/portfolio/illustrations" className="border-4 border-[#bbb] w-[300px] h-[400px] rounded relative bg-illustrations-bg bg-no-repeat bg-cover bg-center hover:text-green-400">
                    <span className="absolute right-3 bottom-3 text-4xl font-bold">Illustrations</span>
                </Link>
                <Link href="/portfolio/websites" className="border-4 border-[#bbb] w-[300px] h-[400px] rounded relative bg-apps-bg bg-no-repeat bg-cover bg-center hover:text-green-400">
                    <span className="absolute right-3 bottom-3 text-4xl font-bold">Websites</span>
                </Link>
                <Link href="/portfolio/applications" className="border-4 border-[#bbb] w-[300px] h-[400px] rounded relative bg-websites-bg bg-no-repeat bg-cover bg-center hover:text-green-400">
                    <span className="absolute right-3 bottom-3 text-4xl font-bold">Applications</span>
                </Link>
            </div>
        </div>
    );
};

export default Portfolio;