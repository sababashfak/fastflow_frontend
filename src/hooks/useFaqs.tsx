import { TFAQ } from "@/interfaces/faq";

const faqs: TFAQ[] = [
  {
    question: "How much does a home remodeling cost?",
    answer:
      "The cost of home remodeling varies widely depending on the scope of the project, materials used, and labor costs. On average, you can expect to spend anywhere from $10,000 to $100,000 or more. It's best to get a detailed estimate based on your specific needs and preferences.",
  },
  {
    question: "How much does a home building cost?",
    answer:
      "The cost of building a home depends on various factors such as location, size, design complexity, and quality of materials. Generally, it ranges from $100 to $200 per square foot. It's essential to consult with a professional builder to get an accurate estimate tailored to your project.",
  },
  {
    question: "What is included with a free remodeling estimate?",
    answer:
      "A free remodeling estimate typically includes an on-site evaluation, detailed project outline, cost breakdown of materials and labor, and a proposed timeline. It helps you understand the scope of work and budget required for your renovation project, allowing you to make informed decisions.",
  },
  {
    question: "Why do roofing estimates vary so widely?",
    answer:
      "Roofing estimates can vary due to factors like roof size, pitch, material choice, labor costs, and regional price differences. Additionally, the condition of your existing roof and any necessary repairs or structural changes can impact the overall cost. It's advisable to get multiple quotes for comparison.",
  },
];

const useFaqs = (limit = 0) => {
  return limit ? faqs.slice(0, limit) : faqs;
};

export default useFaqs;
