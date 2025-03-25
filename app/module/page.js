import Card from "@/components/module/card.js";
import image from "@/public/Jaguar-Negro.jpg";


const dummyCardData = {
    image,
    title: "Sample Title",
    state: "Active",
    opinion: "This is a sample opinion.",
    date: "2023-01-01",
    recommendationStatus: "Recommended",
    tag: "Sample Tag",
  };

export default function Explore() {
    return (
        <ul>
            <li> <Card data={dummyCardData}></Card> </li>
            <li> <Card data={dummyCardData}></Card> </li>
        </ul>
    );
}