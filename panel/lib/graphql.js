import { useState } from 'react'
import useSWR from 'swr'
//next fetch funciona no servidor além do browser caso n estivese usando next poderia usar isomorphic-unfetch
const fetcher = async query => {
  //console.log('fetcher1111111111111111111', JSON.stringify(query), query)
  const res = await fetch(process.env.NEXT_PUBLIC_API, {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'POST',
    body: query
  })
  const json = await res.json()
  return json
}

const useQuery = queryStr => {
  const query = {
    query: queryStr
  }
  const allData = useSWR(JSON.stringify(query), fetcher)
  const { data, ...rest } = allData
  return { data: data ? data.data : null, ...rest }
}

const useMutation = query => {
  const [data, setData] = useState(null)
  const mutate = async variables => {
    const mutation = {
      query,
      variables
    }
    try {
      const returnedData = await fetcher(JSON.stringify(mutation))
      setData(returnedData)
      return returnedData
    } catch (err) {}
  }
  return [data, mutate]
}

export { useQuery, useMutation }
