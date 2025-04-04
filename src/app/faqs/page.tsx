import { fetchFaqs } from "@/api/faqs";
import FaqsView from "@/views/faqs/faqs-view";

const getData = async () => {
  const faqs = await fetchFaqs()

  return { faqs }
}

export default async function FaqPage() {
  const data  = await getData()

  return (
    <FaqsView { ...data } />
  );
}
