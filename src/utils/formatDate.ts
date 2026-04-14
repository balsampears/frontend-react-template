import dayjs, { ConfigType } from 'dayjs';

export function formatDate(date: ConfigType, format = 'YYYY-MM-DD'): string {
  if (!date) return '';
  const d = dayjs(date);
  return d.isValid() ? d.format(format) : '';
}
