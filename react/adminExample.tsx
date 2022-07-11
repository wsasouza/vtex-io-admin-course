import React, { FC } from 'react'
import { Layout, PageBlock } from 'vtex.styleguide'

const AdminExample: FC = () => {
  return (
    <Layout>
      <PageBlock
        title="Informações sobre o App Administrativo"
        subtitle="Exemplo de um App Administrativo desenvolvido durante a trilha de certificação do VTEX-IO durante o Hiring Coders #3."
        variation="full"
      >
        <h1>Olá, eu sou um App!</h1>
      </PageBlock>
    </Layout>
  )
}

export default AdminExample
