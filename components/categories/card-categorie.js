import CategorieItem from "./categorie-item";
import styles from "./card-categorie.module.css";

//Contains the card of each category, and inside the items of the category
export default function CardCategorie({ categorie }) {

const dummyCategorie = {
    name: "Sample Category",
    description: "This is a sample category description.",
    items: [
        { id: 1, title: "Item 1" },
        { id: 2, title: "Item 2" },
        { id: 3, title: "Item 3" },
    ],
};

return (
    <div className={styles.container}>
        <h1>{dummyCategorie.name}</h1>
        <p>{dummyCategorie.description}</p>
        <ul>
            {dummyCategorie.items.map((item) => (
                <CategorieItem key={item.id} item={item} />
            ))}
        </ul>
    </div>
);
}
