import "@/styles/header.css";
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <Image
                src="/rr-logo-square.svg"
                alt="logo"
                width={50}
                height={50}
            />
            <div>
                <a href="/">First Issue</a>
                <a href="/pdf">PDF</a>
            </div>
        </header>
    );
}