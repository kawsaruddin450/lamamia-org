import React from 'react';
import userPic from "@/public/1.png";
import Image from 'next/image';

const Post = () => {
    return (
        <div>
            <div className="flex gap-12 items-center mt-12">
                <div className="flex-grow flex flex-col gap-8">
                    <h2 className="text-5xl font-bold">Blog Title</h2>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt et in tenetur mollitia rerum, temporibus eligendi aut sit voluptatem iure excepturi dolores praesentium obcaecati! Eum, recusandae? Accusamus, necessitatibus autem.</p>
                    <div className="flex gap-4 items-center">
                        <Image className="rounded-full" src={userPic} alt="User Pic" />
                        <h3 className="font-semibold">Kawsar Ahmed</h3>
                    </div>
                </div>
                <div className="w-full h-[300px] relative">
                    <Image className=" object-contain" fill={true} src="https://images.pexels.com/photos/672630/pexels-photo-672630.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Blog Image" />
                </div>
            </div>
            <div className="mt-12 text-justify">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia deleniti necessitatibus nobis voluptate temporibus corrupti, illo quidem assumenda? Recusandae quos optio modi eum neque, nulla, error, ipsum repellendus laboriosam vel obcaecati enim nemo est pariatur inventore facilis rerum? Quod, ipsum sunt accusantium veniam, ab pariatur eius temporibus voluptatibus nisi dolorem quam minus iusto dignissimos quibusdam voluptates praesentium alias fuga in laborum recusandae quaerat cumque vitae. Labore alias saepe tempora? Quae minus officia optio repellat, quaerat ducimus aperiam? Earum quasi quis quos delectus incidunt nesciunt esse nostrum beatae? Repudiandae minus similique quisquam dolores, sunt nulla nihil quam quidem ut repellendus, voluptate corporis ab praesentium laborum consectetur voluptatibus modi optio minima! Sunt praesentium ipsam magni, accusamus temporibus dignissimos quisquam vero inventore provident, consequuntur expedita pariatur, commodi veniam minus! Laborum pariatur saepe officiis numquam fugiat culpa ipsa, quasi voluptatibus iste nostrum sint ad rem neque quam earum maiores autem rerum, veritatis repudiandae corporis debitis maxime placeat atque consequatur. Harum similique mollitia eius minima quas numquam sint corrupti sed ipsa facere. Tempora atque iusto porro enim voluptate quod quas tenetur cum illo magnam soluta ab animi adipisci excepturi suscipit labore, non, magni sapiente. Unde necessitatibus dicta, sint eius culpa est impedit esse porro nihil.</p>
            </div>
        </div>
    );
};

export default Post;