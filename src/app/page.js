import "@/styles/home.css";
import Ascii from "@/components/ascii";

export default function Page() {
    return (
        <div id="site-home">
            <h1 id="first-edition-subtitle">CRLS Free Thinkers Journal</h1>
            <div id="divider" />
            <h1 id="first-edition-title">The First Edition</h1>
            <Ascii id="ascii-art" file="/ascii-art/1-cover.txt" />
            <div id="articles-list">
                <p>An Open Letter To The Register Forum</p>
                <p>Brawl Stars is Destroying Our World</p>
                <p>Getting Back on Track After Detracking</p>
                <p>An Exclusive Interview With ...</p>
                <p>+ What is The Free Thinkers Journal?</p>
            </div>
        </div>
    )
}