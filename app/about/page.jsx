import Button from '@/components/button/Button';
import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div>
            <div className="w-full h-80 relative">
                <Image className="object-cover grayscale" fill={true} src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600" alt="about page cover" />
                <div className="absolute left-5 bottom-5 bg-green-400 p-2">
                    <h1 className="font-bold text-3xl">Digital Storytellers</h1>
                    <h2 className="text-xl font-medium mt-2">Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className="mt-24 flex gap-24">
                <div>
                    <h2 className="text-2xl font-bold">Who Are We?</h2>
                    <p className="my-8 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                        beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                        <br />
                        <br />
                        voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                        esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                        officiis voluptatum quo ea eveniet?
                    </p>
                </div>
                <div>
                    <h2  className="text-2xl font-bold">What We Do?</h2>
                    <p className="my-8 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                        Creative Illustrations
                        <br />
                        <br /> - Dynamic Websites
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> - Mobile Apps
                    </p>
                    <Button url="/contact" text="Contact"></Button>
                </div>
            </div>
        </div>
    );
};

export default About;