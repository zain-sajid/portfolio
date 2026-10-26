import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs from 'dayjs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, '');
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function dateRange(startDate: Date, endDate?: Date | string): string {
  const start = dayjs(startDate);
  const startMonth = start.format('MMMM');
  const startYear = start.format('YYYY');

  let endMonth;
  let endYear;

  if (endDate) {
    if (typeof endDate === 'string') {
      endMonth = '';
      endYear = endDate;
    } else {
      const end = dayjs(endDate);
      endMonth = end.format('MMMM');
      endYear = end.format('YYYY');
    }
  }

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
}

type WorkDates = { data: { dateStart: Date; dateEnd: Date | string } };

// Ongoing roles first, then most recent start date
export function byRecency(a: WorkDates, b: WorkDates) {
  const ongoing = (entry: WorkDates) => typeof entry.data.dateEnd === 'string';
  if (ongoing(a) !== ongoing(b)) return ongoing(a) ? -1 : 1;
  return b.data.dateStart.valueOf() - a.data.dateStart.valueOf();
}

const monthYear = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC'
});

// "Jun 2025", or the string itself for open-ended dates like 'Present'
export function formatMonthYear(date: Date | string) {
  return typeof date === 'string' ? date : monthYear.format(date);
}

// Inclusive month count between two dates, as "8m", "2y" or "1y 4m"
export function duration(start: Date, end: Date | string) {
  const until = typeof end === 'string' ? new Date() : end;
  const months =
    (until.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    (until.getUTCMonth() - start.getUTCMonth()) +
    1;
  if (months <= 0) return '';
  const years = Math.floor(months / 12);
  const rest = months % 12;
  if (!years) return `${rest}m`;
  return rest ? `${years}y ${rest}m` : `${years}y`;
}
