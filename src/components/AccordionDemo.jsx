import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { duration, formatMonthYear } from '@/lib/utils';
import Link from '@/components/icons/Link';

// One stop on the work timeline: the company logo sits on a rail that runs
// down to the next role; `last` ends the rail here.
export function AccordionDemo({ entry, last = false, ...props }) {
  const { company, companyURL, logo, role, employmentType, dateStart, dateEnd } =
    entry.data;
  const length = duration(dateStart, dateEnd);

  return (
    <div className={`relative ${last ? '' : 'pb-8'}`}>
      {!last && (
        <span
          aria-hidden="true"
          className="absolute bottom-1 left-3 top-9 w-px bg-border"
        />
      )}

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={entry.slug}>
          <AccordionTrigger className="items-start gap-3 py-0 text-base [&>svg]:mt-1.5">
            <span className="flex flex-1 items-start gap-3">
              {logo ? (
                <img
                  src={logo}
                  alt=""
                  width={24}
                  height={24}
                  className="mt-0.5 size-6 shrink-0 rounded-md"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border border-line bg-muted font-mono text-[11px] text-muted-foreground"
                >
                  {company[0]}
                </span>
              )}

              <span className="flex flex-col gap-1">
                <span className="flex items-center gap-2 text-lg font-medium text-black dark:text-white">
                  {companyURL ? (
                    <a
                      href={companyURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 hover:underline"
                    >
                      {company}
                      <Link />
                    </a>
                  ) : (
                    company
                  )}
                </span>
                <span className="font-normal text-black/80 dark:text-white/80">{role}</span>
                <span className="flex flex-wrap items-center gap-2 text-sm font-normal text-muted-foreground tabular-nums">
                  {employmentType && (
                    <>
                      <span>{employmentType}</span>
                      <span aria-hidden="true" className="h-3.5 w-px bg-border" />
                    </>
                  )}
                  <span>
                    {formatMonthYear(dateStart)} — {formatMonthYear(dateEnd)}
                  </span>
                  {length && (
                    <>
                      <span aria-hidden="true" className="h-3.5 w-px bg-border" />
                      <span>{length}</span>
                    </>
                  )}
                </span>
              </span>
            </span>
          </AccordionTrigger>

          <AccordionContent className="pb-0 pl-9 pt-3">{props.content}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionDemo;
