/**
 * Demo API - 示范用增删改查
 * 后端需提供 /demoApi 或按需配置代理
 */
import request from './request';

const BASE = '/demoApi';

/** 获取列表 */
export function getDemoList(params?: Record<string, unknown>) {
  return request.get(BASE, { params });
}

/** 获取单条详情 */
export function getDemoById(id: string | number) {
  return request.get(`${BASE}/${id}`);
}

/** 新增 */
export function createDemo(data: Record<string, unknown>) {
  return request.post(BASE, data);
}

/** 修改 */
export function updateDemo(id: string | number, data: Record<string, unknown>) {
  return request.put(`${BASE}/${id}`, data);
}

/** 删除 */
export function deleteDemo(id: string | number) {
  return request.delete(`${BASE}/${id}`);
}
