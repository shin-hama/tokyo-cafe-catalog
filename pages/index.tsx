import * as React from 'react'

import Homepage from '@/components/Homepage'
import { domain } from '@/lib/config'
import { resolveNotionDatabaseContents } from '@/lib/resolve-notion-page'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionDatabaseContents()

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function HomePage(props) {
  return <Homepage {...props} />
}
