import React from 'react'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import { useMutation, fetcher } from '../../lib/graphql'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as Yup from 'yup'

const CREATE_CATEGORY = `
    mutation createCategory($name: String!,$slug: String!) {
      createCategory (input:{
        name: $name,
        slug: $slug
      })
      {
        id
        name
        slug
      }
    }
  `

const CategorySchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Por Favor, informe pelo menos um nome com 3 caracteres')
    .required('Por Favor, informe um nome'),
  slug: Yup.string()
    .min(3, 'Por favor, informe um slug para a categoria')
    .required('Por Favor, informe um slug')
    .test(
      'is-unique',
      'Por favor utilize outro slug esse já está em uso',
      async value => {
        const ret = await fetcher(
          JSON.stringify({
            query: `query{
            getCategoryBySlug(slug:"${value}"){
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
    )
})

const Index = () => {
  const router = useRouter()
  const [data, createCategory] = useMutation(CREATE_CATEGORY)
  const form = useFormik({
    initialValues: {
      name: '',
      slug: ''
    },
    validationSchema: CategorySchema,
    onSubmit: async values => {
      const data = await createCategory(values)
      console.log(data)
      if (data && !data.errors) {
        router.push('/categories')
      }
    }
  })
  return (
    <Layout>
      <Title>Criar nova categoria</Title>
      {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}
      <div className="mt-8"></div>
      <div>
        <Button.LinkOutline href="/categories">Voltar</Button.LinkOutline>
      </div>
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full bg-white shadow overflow-hidden sm:rounded-lg border-b border-gray-200 p-12">
            {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
            {data && !!data.errors && (
              <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                Ocorreu um erro ao salvar os dados
              </p>
            )}
            <form onSubmit={form.handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <Input
                  label="Nome da categoria"
                  placeholder="preencha com o nome da categoria"
                  value={form.values.name}
                  onChange={form.handleChange}
                  name="name"
                  errorMessage={form.errors.name}
                />

                <Input
                  label="Slug da categoria"
                  placeholder="preencha com o slug da categoria"
                  value={form.values.slug}
                  onChange={form.handleChange}
                  name="slug"
                  helptext="slug é utilizado para urls amigaveis"
                  errorMessage={form.errors.slug}
                />
              </div>
              <Button type="submit">Criar Categoria</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Index
