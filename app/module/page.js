import Card from "@/components/module/card.js";
import image from "@/public/Jaguar-Negro.jpg";
import { getModulesByCategory } from "@/actions/modules.js";

export default async function Explore() {
  const modules = await getModulesByCategory("Libro");
  return (
    <ul>
      {modules.map((module) => (
        <Card 
          key={module.id} 
          title={module.title} 
          category={module.category} 
          fields={{ ...module.fields }} 
        />
      ))}
    </ul>
  );
}
