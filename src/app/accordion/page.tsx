

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "item-1",
    trigger: "Click Me?",
    content:
      "Hello 1",
  },
  {
    value: "item-2",
    trigger: "Click Me too?",
    content: "Hello 2"
  },
  
]

const AccordionF = () => {
    return (

        <div className="w-[220px] flex justify-center items-center ">
        <Accordion type="multiple" defaultValue={['item-1']}>
            {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
        </Accordion>
        </div>
        )
}

export default AccordionF