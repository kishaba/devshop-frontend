import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMutation, useQuery, fetcher } from '../../../lib/graphql'
import { useFormik } from 'formik'
import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import * as Yup from 'yup'

let id = ''

const UPDATE_BRAND = `
    mutation updateBrand($id: String!, $name: String!,$slug: String!) {
      updateBrand (input:{
        id:   $id,
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
const BrandSchema = Yup.object().shape({
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
            getBrandBySlug(slug:"${value}"){
              id
            }
          }`
          })
        )
        if (ret.errors) {
          return true
        }
        if (ret.data.getBrandBySlug.id === id) {
          return true
        }
        return false
      }
    )
})

const Edit = () => {
  const router = useRouter()
  id = router.query.id
  const [updatedata, updateBrand] = useMutation(UPDATE_BRAND)
  //buscou dados no servidor
  const { data } = useQuery(`
    query{
      getBrandById(id:"${router.query.id}") {
        id,
        name,
        slug
      }
    }
  `)
  //definiu inicialização do form
  const form = useFormik({
    initialValues: {
      name: '',
      slug: ''
    },
    validationSchema: BrandSchema,
    onSubmit: async values => {
      const category = {
        ...values,
        id: router.query.id
      }

      //console.log(category)
      const data = await updateBrand(category)
      console.log(data)
      if (data && !data.errors) {
        router.push('/brands')
      }
    }
  })
  //passou os dados pro form
  useEffect(() => {
    if (data && data.getBrandById) {
      form.setFieldValue('name', data.getBrandById.name)
      form.setFieldValue('slug', data.getBrandById.slug)
    }
  }, [data])
  return (
    <Layout>
      <Title>Editar Marca</Title>
      {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}
      <div className="mt-8"></div>
      <div>
        <Button.LinkOutline href="/brands">Voltar</Button.LinkOutline>
      </div>
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block bg-white min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 p-12">
            {updatedata && !!updatedata.errors && (
              <p className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                Ocorreu um erro ao salvar os dados
              </p>
            )}
            <form onSubmit={form.handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <Input
                  label="Nome da marca"
                  placeholder="preencha com o nome da marca"
                  value={form.values.name}
                  onChange={form.handleChange}
                  name="name"
                  errorMessage={form.errors.name}
                />
                <Input
                  label="Slug da marca"
                  placeholder="preencha com o slug da marca"
                  value={form.values.slug}
                  onChange={form.handleChange}
                  name="slug"
                  helptext="slug é utilizado para urls amigaveis"
                  errorMessage={form.errors.slug}
                />
              </div>
              <Button type="submit">Salvar Marca</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Edit
