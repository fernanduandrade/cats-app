import axios from 'axios'
import { NetworkError } from '@/errors/networkErro'
import { Either } from '@/utils/either'

export default {
  async get<T> (route: string): Promise<Either<NetworkError, T>> {
    try {
      const { data } = await axios.get(route)
      return Either.right(data)
    } catch (e) {
      return Either.left(new NetworkError('api error'))
    }
  }
}
