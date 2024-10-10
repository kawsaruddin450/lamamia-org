import Image from "next/image";
import hero from "@/public/hero.png";

export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className="flex-1 space-y-10">
        <h1 className="text-7xl font-bold bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent">Better design for your digital products.</h1>
        <p className="text-2xl font-light">Turning your Idea into Reality. We bring together the teams from the
          global tech industry.</p>
        <button className="p-5 bg-green-400 rounded">See Our Works</button>
      </div>
      <div className="flex-1">
        <Image className="w-4/5 object-cover mr-8 ml-auto" src={hero} alt="Home page hero" />
      </div>
    </div>
  );
}
