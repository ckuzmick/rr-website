import "@/styles/home.css";
import Ascii from "@/components/ascii";

export default function Page() {
    return (
        <div id="site-home">
            <h1 id="first-edition-subtitle">CRLS Free Thinkers Journal</h1>
            <div id="divider" />
            <h1 id="first-edition-title">The First Edition</h1>
            <Ascii id="ascii-art" file="/ascii-art/1-cover.txt" />
        </div>
    )
}