import Link from "next/link";


////////icons////////////////
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa"



const sociales = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedinIn />, path: "" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaTwitter />, path: "" },
]

export default function Socials({ containerStyles, iconStyles }) {
    return (
        <div className={containerStyles}>
            {sociales.map((item, index) => {
                return (
                    <Link href={item.path} key={index} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
}