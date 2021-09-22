import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '../../../lib/graphql'
import { useFormik } from 'formik'
import Layout from '../../../components/Layout'
import Title from '../../../components/Title'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

const UPDATE_CATEGORY = `
    mutation updateCategory($id: String!, $name: String!,$slug: String!) {
      updateCategory (input:{
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

const Edit = () => {
  const router = useRouter()
  const [updatedata, updateCategory] = useMutation(UPDATE_CATEGORY)
  //buscou dados no servidor
  const { data } = useQuery(`
    query{
      getCategoryById(id:"${router.query.id}") {
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
    onSubmit: async values => {
      const category = {
        ...values,
        id: router.query.id
      }
      //console.log(category)
      await updateCategory(category)
      router.push('/categories')
    }
  })
  //passou os dados pro form
  useEffect(() => {
    if (data && data.getCategoryById) {
      form.setFieldValue('name', data.getCategoryById.name)
      form.setFieldValue('slug', data.getCategoryById.slug)
    }
  }, [data])
  return (
    <Layout>
      <Title>Editar categoria</Title>
      {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}
      <div className="mt-8"></div>
      <div>
        <Button.LinkOutline href="/categories">Voltar</Button.LinkOutline>
      </div>
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block bg-white min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 p-12">
            <form onSubmit={form.handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <Input
                  label="Nome da categoria"
                  placeholder="preencha com o nome da categoria"
                  value={form.values.name}
                  onChange={form.handleChange}
                  name="name"
                />
                <Input
                  label="Slug da categoria"
                  placeholder="preencha com o slug da categoria"
                  value={form.values.slug}
                  onChange={form.handleChange}
                  name="slug"
                  helptext="slug é utilizado para urls amigaveis"
                />
              </div>
              <Button type="submit">Salvar Categoria</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Edit
