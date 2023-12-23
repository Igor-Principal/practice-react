import { format } from 'date-fns';

export const makeFormatDate = date => format(new Date(date), 'Pp');
