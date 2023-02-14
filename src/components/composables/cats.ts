import { Ref, ref } from 'vue'
import api from '@/services/apiService'
import { Cats } from '@/utils/types'

export async function useFetchCat (): Promise<Ref<string>> {
  const url = 'https://api.thecatapi.com/v1/images/search?limit=1&size=full'

  const catImgUrl = ref('https://http.cat/404')

  const response = await api.get<Cats[]>(url)

  if (response.isRight()) {
    const result: Cats[] = response.get()
    catImgUrl.value = result[0].url

    return catImgUrl
  }
  return catImgUrl
}
