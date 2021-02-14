import axios from 'axios'

export const fetchRandomImg = async (): Promise<string> => {
  return axios
    .get<{ file: string }>('http://aws.random.cat/meow')
    .then(res => res.data.file)
    .catch(e => {
      console.error(e)
      throw new Error(e)
    })
}
