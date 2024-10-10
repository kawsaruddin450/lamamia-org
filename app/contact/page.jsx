import React from 'react';
import contactImg from "@/public/contact.png";
import Image from 'next/image';
import Button from '@/components/button/Button';

const Contact = () => {
    return (
        <div>
            <h1 className="text-6xl font-bold mb-28 text-center">Let`s Keep in Touch...</h1>
            <div className="flex gap-24">
                <div className="flex-1 relative h-[400px]">
                    <Image className="w-3/4 object-contain" fill={true} src={contactImg} alt="Contact Page Image" />
                </div>
                <form className="flex-1 flex flex-col gap-3">
                    <input className="bg-inherit text-white p-4 border-2 rounded border-slate-200" type="text" placeholder="Name" />
                    <input className="bg-inherit text-white p-4 border-2 rounded border-slate-200" type="email" placeholder="Email" />
                    <textarea className="bg-inherit text-white p-4 border-2 rounded border-slate-200" placeholder="Message" rows={5}></textarea>
                    <Button url="#" text="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;