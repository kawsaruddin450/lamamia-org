import Link from "next/link";

const Button = ({ text, url }) => {
    return <Link href={url}>
        <button className="bg-green-400 rounded border-0 p-5">{text}</button>
    </Link>;
};
export default Button;