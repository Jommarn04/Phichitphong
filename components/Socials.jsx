import Link from "next/link";


////////icons////////////////
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa"



const sociales = [
    { icon: <FaGithub />, path: "https://github.com/Jommarn04" },
    { icon: <FaLinkedinIn />, path: "https://www.instagram.com/tamsuntai_14/?hl=en" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=100048286844488" },
    { icon: <FaTwitter />, path: "https://x.com/tamsuntai123" },
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