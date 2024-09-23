import {
    Accordion as BaseAccordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface Props {
    data: {
      id: number;
      attributes: {
        Question: string;
        Awnser: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
      };
    }[];
  }
  
  export function Accordion({ data }: Props) {
    return (
      <BaseAccordion type="single" collapsible className="w-full">
        {data.map((item, i) => (
          <AccordionItem key={item.id} value={`item-${i.toFixed()}`}>
            <AccordionTrigger className="text-xl sm:text-2xl text-start font-poppins font-black p-6 mt-6">
                <h2>{item.attributes.Question}</h2>
            </AccordionTrigger>
            <AccordionContent className="text-xl sm:text-2xl font-custom p-6 pt-0">
                {item.attributes.Awnser}
                </AccordionContent>
          </AccordionItem>
        ))}
      </BaseAccordion>
    );
  }
