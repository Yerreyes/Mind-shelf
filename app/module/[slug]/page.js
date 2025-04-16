import Form from "@/components/form/form";
import { getModule } from "@/actions/modules";
import { notFound } from "next/navigation";

export default async function EditModulePage({ params }) {
  const { slug } = await params;
  const module = await getModule(slug);

  if (!module) {
    notFound();
  }
  return (
    <>
      <Form category ={module.category} module={module}></Form>
    </>
  );
}
