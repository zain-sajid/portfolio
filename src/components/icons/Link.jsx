import { cn } from '@/lib/utils';

const Link = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(
      'h-4 w-4 fill-none stroke-current stroke-2 overflow-visible',
      className
    )}
  >
    <path
      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-in-out"
      d="M15 3h6v6"
    ></path>
    <path
      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-in-out"
      d="M10 14 21 3"
    ></path>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
  </svg>
);

export default Link;
