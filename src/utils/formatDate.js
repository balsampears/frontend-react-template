/**
 * 日期格式化工具（基于 dayjs）
 * @param {Date|string|number} date - 日期
 * @param {string} format - 格式，默认 'YYYY-MM-DD'，支持 dayjs 格式符
 * @returns {string}
 */
import dayjs from 'dayjs';

export function formatDate(date, format = 'YYYY-MM-DD') {
  if (!date) return '';
  const d = dayjs(date);
  return d.isValid() ? d.format(format) : '';
}
