import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useFaqs from "@/hooks/useFaqs";
import SectionTop from "../shared/SectionTop";

const FAQs = () => {
  const faqs = useFaqs(4);

  return (
    <section className="relative z-[1] mb-20 xl:mb-24">
      <div className="absolute left-0 top-1/2 z-[-1] hidden h-[480px] w-full -translate-y-1/2 bg-[#151515] xl:block"></div>
      <div className="container">
        <div className="relative z-10 w-full bg-white py-16 xl:py-24">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-24 gap-y-8 sm:gap-y-12 lg:max-w-none lg:grid-cols-2">
            <div className="">
              <SectionTop
                title="FAQs"
                subtitle="Get the info you need"
                containerClass="text-left items-start"
              />
              <Accordion
                defaultValue="item-1"
                type="single"
                className="mt-10 w-full"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-left font-semibold text-dark/90">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <img
              src="/faq.jpg"
              alt="FAQ"
              className="row-start-1 aspect-[4/3] w-full self-center object-cover lg:row-start-auto xl:h-[480px]"
            />
          </div>
          <div className="absolute left-1/2 top-0 z-[-1] h-full w-[calc(100%+200px)] max-w-[100vw] -translate-x-1/2 bg-white shadow-[0_3px_20px_rgba(0,0,0,0.06)]"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
