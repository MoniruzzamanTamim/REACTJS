import React from 'react'
import Layout from '../Layout/Layout'
import CRUDRRED from '../Components/CRUD/CRUD-RED'
import CRUD from '../Components/CRUD/CRUD'

function CRUD_MAIN() {
  return (
    <>
    <Layout>
        <CRUDRRED/>
        <CRUD/>
    </Layout>
    
    
    </>
  )
}

export default CRUD_MAIN