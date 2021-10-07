import React from 'react'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import { useMutation, useQuery, fetcher } from '../../lib/graphql'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as Yup from 'yup'
import Select from '../../components/Select'

const CREATE_PRODUCT = `
    mutation createProduct($name: String!,$slug: String!,$description: String!,$category: String!) {
      createProduct (input:{
        name: $name,
        slug: $slug,
        description: $description,
        category: $category
      })
      {
        id
        name
        slug,
        description,
        category
      }
    }
  `

const GET_ALL_CATEGORIES = `
    query {
      getAllCategories{
        id
        name
        slug
      }
    }
  `

const ProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Por Favor, informe pelo menos um nome com 3 caracteres')
    .required('Por Favor, informe um nome'),
  slug: Yup.string()
    .min(3, 'Por favor, informe um slug de pelo menos 3 caracteres')
    .required('Por Favor, informe um slug')
    .test(
      'is-unique',
      'Por favor utilize outro slug esse já está em uso',
      async value => {
        const ret = await fetcher(
          JSON.stringify({
            query: `query{
            getProductBySlug(slug:"${value}"){
              id
            }
          }`
          })
        )
        if (ret.errors) {
          return true
        }
        return false
      }
    ),
  description: Yup.string()
    .min(10, 'Por favor, informe uma descroição de pelo menos 10 caracteres')
    .required('Por Favor, informa descrição'),
  category: Yup.string().required('Por Favor, informe uma categoria')
})

const Index = () => {
  const router = useRouter()
  const [data, createProduct] = useMutation(CREATE_PRODUCT)
  const { data: categories, mutate } = useQuery(GET_ALL_CATEGORIES)
  const form = useFormik({
    initialValues: {
      name: '',
      slug: '',
      description: '',
      category: ''
    },
    validationSchema: ProductSchema,
    onSubmit: async values => {
      const data = await createProduct(values)
      console.log(data)
      if (data && !data.errors) {
        router.push('/products')
      }
    }
  })

  //tratar options
  let options = []
  if (categories && categories.getAllCategories) {
    options = categories.getAllCategories.map(item => {
      return {
        id: item.id,
        label: item.name
      }
    })
  }
  return (
    <Layout>
      <Title>Criar novo produto</Title>
      {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}
      <div className="mt-8"></div>
      <div>
        <Button.LinkOutline href="/products">Voltar</Button.LinkOutline>
      </div>
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full bg-white shadow overflow-hidden sm:rounded-lg border-b border-gray-200 p-12">
            {data && !!data.errors && (
              <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                Ocorreu um erro ao salvar os dados
              </p>
            )}
            <form onSubmit={form.handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <Input
                  label="Nome do produto"
                  placeholder="Preencha com o nome do produto"
                  value={form.values.name}
                  onChange={form.handleChange}
                  name="name"
                  errorMessage={form.errors.name}
                />
                <Input
                  label="Slug do produto"
                  placeholder="Preencha com o slug do produto"
                  value={form.values.slug}
                  onChange={form.handleChange}
                  name="slug"
                  helptext="slug é utilizado para urls amigaveis"
                  errorMessage={form.errors.slug}
                />
                <Input
                  label="Descrição do produto"
                  placeholder="Preencha com a descrição do produto"
                  value={form.values.description}
                  onChange={form.handleChange}
                  name="description"
                  errorMessage={form.errors.description}
                />
                <Select
                  label="Selecione a categoria"
                  name="category"
                  onChange={form.handleChange}
                  value={form.values.category}
                  options={options}
                  errorMessage={form.errors.category}
                  initial={{ id: '', label: 'Selecione...' }}
                />
              </div>
              <Button type="submit">Criar Produto</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Index
