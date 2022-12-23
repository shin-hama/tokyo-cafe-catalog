import * as React from 'react'

import { HomepageProps } from '@/lib/types'

import Layout from './Layout'

const Homepage: React.FC<HomepageProps> = ({ pages }) => {
  console.log('home')
  console.log(pages)

  return (
    <div className='notion notion-app'>
      <Layout>
        {pages.map((page) => (
          <div key={page.id}>{page.id}</div>
        ))}
      </Layout>
    </div>
  )
}

export default Homepage
