import * as React from 'react'
import Link from 'next/link'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { HomepageProps } from '@/lib/types'

import Layout from '../Layout'
import PageCard from './PageCard'

const Homepage: React.FC<HomepageProps> = ({ pages }) => {
  console.log('home')
  console.log(pages)

  return (
    <div className='notion-app'>
      <Layout>
        <Typography variant='h1' textAlign='center'>
          Tokyo Cafe Catalog
        </Typography>
        <Container maxWidth='sm'>
          <Grid container spacing={2}>
            {pages.map((page) => (
              <Grid key={page.id} item xs={6} sm={4}>
                <Link href={page.id}>
                  <a>
                    <PageCard
                      img={page.cover?.[page.cover?.type]?.url}
                      title={page.properties.Name['title'][0].plain_text}
                    />
                  </a>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Layout>
    </div>
  )
}

export default Homepage
