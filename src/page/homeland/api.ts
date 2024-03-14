import { getRequest } from '@/utils/axios/index'

export const getAllPageRequest = () => {
  return getRequest('/api/page', { params: { userId: 1 } })
}
