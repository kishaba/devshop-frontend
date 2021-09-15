import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from '../../../lib/graphql'
import { useFormik } from 'formik'
import Layout from '../../../components/Layout'
import Title from '../../../components/Title'

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
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"></div>
          <form onSubmit={form.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={form.handleChange}
              value={form.values.name}
            />
            <input
              type="text"
              name="slug"
              placeholder="slug"
              onChange={form.handleChange}
              value={form.values.slug}
            />
            <button type="submit">Atualizar Categoria</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Edit
