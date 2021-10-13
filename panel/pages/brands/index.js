import Link from 'next/link'
import React from 'react'
import Alert from '../../components/Alert'
import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Table from '../../components/Table'
import Title from '../../components/Title'
import { useMutation, useQuery } from '../../lib/graphql'

const GET_ALL_BRANDS = `
    query {
      getAllBrands{
        id
        name
        slug
      }
    }
  `

const DELETE_BRAND = `
    mutation deleteBrand($id: String!) {
      deleteBrand (id:$id)
    }
  `

const Index = () => {
  const { data, mutate } = useQuery(GET_ALL_BRANDS)
  const [deleteData, deleteBrand] = useMutation(DELETE_BRAND)
  const remove = id => async () => {
    await deleteBrand({ id })
    mutate()
  }
  // console.log(data, error)
  return (
    <Layout>
      <Title>Gerenciar marcas</Title>
      {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}
      <div className="mt-8"></div>
      <div>
        <Button.Link href="/brands/create"> Criar Marcas</Button.Link>
      </div>
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          {data && data.getAllBrands && data.getAllBrands.length === 0 && (
            <Alert>
              <p>Nenhuma marca encontrada</p>
            </Alert>
          )}
          {data && data.getAllBrands && data.getAllBrands.length > 0 && (
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <Table>
                <Table.Head>
                  <Table.Th>Marcas</Table.Th>
                  <Table.Th></Table.Th>
                </Table.Head>

                <Table.Body>
                  {data &&
                    data.getAllBrands &&
                    data.getAllBrands.map(item => {
                      return (
                        <Table.Tr key={item.id}>
                          <Table.Td>
                            <div className="flex items-center">
                              <div>
                                <div className="text-sm leading-5 font-medium text-gray-900">
                                  {item.name}
                                </div>
                                <div className="text-sm leading-5 text-gray-500">
                                  {item.slug}
                                </div>
                              </div>
                            </div>
                          </Table.Td>
                          <Table.Td>
                            <Link href={`/brands/${item.id}/edit`}>
                              <a className="text-indigo-600 hover:text-indigo-900">
                                Edit
                              </a>
                            </Link>{' '}
                            |{' '}
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-red-600"
                              onClick={remove(item.id)}
                            >
                              Remove
                            </a>
                          </Table.Td>
                        </Table.Tr>
                      )
                    })}
                </Table.Body>
              </Table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
export default Index
