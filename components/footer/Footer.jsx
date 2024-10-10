import React from 'react';
import socialPic1 from "@/public/1.png";
import socialPic2 from "@/public/2.png";
import socialPic3 from "@/public/3.png";
import socialPic4 from "@/public/4.png";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="flex justify-between h-24 items-center text-sm">
            <div>©2023 Lamamia. All rights reserved.</div>
            <div className="flex items-center gap-3">
                <Image className="w-5 opacity-60 cursor-pointer" src={socialPic1} alt="Facebook" />
                <Image className="w-5 opacity-60 cursor-pointer" src={socialPic2} alt="Instagram" />
                <Image className="w-5 opacity-60 cursor-pointer" src={socialPic3} alt="Twitter" />
                <Image className="w-5 opacity-60 cursor-pointer" src={socialPic4} alt="Youtube" />
            </div>
        </div>
    );
};

export default Footer;