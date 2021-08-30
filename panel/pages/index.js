import React from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Title from '../components/Title'
import { MdHome } from 'react-icons/md'
import Table from '../components/Table'

const Index = () => {
  return (
    <Layout>
      <Title>DevShop Painel de Controle</Title>
      <div className="mt-4">
        <div className="flex flex-wrap -mx-6">
          <Card>
            <Card.Icon>
              <MdHome className="h-8 w-8 text-white" />
            </Card.Icon>
            <Card.Data>
              <Card.Title>2000</Card.Title>
              <Card.Description>Produtos</Card.Description>
            </Card.Data>
          </Card>

          <Card>
            <Card.Icon>
              <MdHome className="h-8 w-8 text-white" />
            </Card.Icon>
            <Card.Data>
              <Card.Title>2000</Card.Title>
              <Card.Description>Produtos</Card.Description>
            </Card.Data>
          </Card>
          <Card>
            <Card.Icon>
              <MdHome className="h-8 w-8 text-white" />
            </Card.Icon>
            <Card.Data>
              <Card.Title>2000</Card.Title>
              <Card.Description>Produtos</Card.Description>
            </Card.Data>
          </Card>
        </div>
      </div>
      <div className="mt-8"></div>
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"></div>
        </div>
      </div>
    </Layout>
  )
}
export default Index
