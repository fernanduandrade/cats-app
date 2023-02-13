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

export default async function (): Promise<string> {
  const response = await catApi.get('?limit=1&size=full')
  return response.data[0].url
}
