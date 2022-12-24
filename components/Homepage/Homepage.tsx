import * as React from 'react'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { HomepageProps } from '@/lib/types'

import { Footer } from '../Footer'
import Layout from '../Layout'
import PageCard from './PageCard'

const Homepage: React.FC<HomepageProps> = ({ pages }) => {
  console.log('home')
  console.log(pages)

  return (
    <Box className='notion-app notion'>
      <Layout>
        <Stack spacing={6} alignItems='center'>
          <Box display='flex' alignItems='center'>
            <Stack spacing={1} py={3}>
              <Typography variant='h1' textAlign='center'>
                Tokyo Cafe Catalog
              </Typography>
              <Typography variant='body2' textAlign='center'>
                東京都内のカフェ巡り記録
              </Typography>
            </Stack>
          </Box>
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
          <Footer />
        </Stack>
      </Layout>
    </Box>
  )
}

export default Homepage
