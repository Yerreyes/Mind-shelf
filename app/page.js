import CardCategorie from "@/components/categories/card-categorie";

export default function Home() {
  return (
    <>
      <div>
        <h1>Categorires</h1>
        <h3> Explore Categories</h3>
      </div>

      <ul>
        <li>
          {" ----"}
          <CardCategorie></CardCategorie>{" "}
        </li>
        <li>
          {" ----"}
          <CardCategorie></CardCategorie>{" "}
        </li>
      </ul>
    </>
  );
}
