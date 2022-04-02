import { catApi } from './api-config'

interface Cats {
  breeds: [];
  id: number;
  url: string;
  width: number;
  height: number;
  'sub_id': string;
  'created_at': Date;
  'original_filename': string;
  'breed_ids'?: number;
}

export default function () {
  return catApi.get('?limit=1&size=full').then((response) => response.data[0].url)
}
