import { formatDistanceToNow } from 'date-fns';

export function makeformatDistanceToNowDate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
