import { getRequest, postRequest } from '@/utils/axios/index'
import { ILegoPreviewComponent } from '@/types/index'

export const savePageRequest = (params: {
  userId: number
  pageItem: Array<Partial<ILegoPreviewComponent>>
}) => {
  return postRequest('/api/page', {
    otherAxiosConfig: {
      data: params
    }
  })
}

export const getPageRequest = (params: { id: number }) => {
  Object.assign(params, { userId: 1 })
  return getRequest(`/api/page/${params.id}`, {
    params
  })
}
