import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { dateRange } from '@/lib/utils';

export function AccordionDemo({ entry, ...props }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem key={entry.slug} value={entry.slug}>
        <AccordionTrigger>
          <div className="flex flex-col gap-1 text-left">
            <div className="font-semibold text-black dark:text-white">
              {entry.data.companyURL ? (
                <a
                  href={entry.data.companyURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {entry.data.company}
                </a>
              ) : (
                entry.data.company
              )}
            </div>
            <div className="text-sm opacity-75">{entry.data.role}</div>
            <div className="text-sm opacity-75">
              {dateRange(entry.data.dateStart, entry.data.dateEnd)}
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent>{props.content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionDemo;
