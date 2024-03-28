import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const cssCalendar = `
.has-mood { 
  position: relative;
}

.has-mood::after {
  content: '';
  display:block;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 3px;
  background: black;
  width: 4px;
  height: 4px;
  border-radius: 50%;
}
.has-mood.day-range-end::after, .has-mood.rdp-day_range_start::after {
  background: white;
}
`

export {
  cn,
  cssCalendar
}