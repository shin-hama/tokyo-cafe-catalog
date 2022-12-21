import * as React from 'react'

import BodyClassName from 'react-body-classname'

import * as types from '@/lib/types'

import { PageHead } from './PageHead'

type Props = React.PropsWithChildren &
  types.PageHeadProps & {
    isLiteMode: boolean
    isDarkMode: boolean
  }
const Layout: React.FC<Props> = ({
  children,
  description,
  image,
  isLiteMode,
  isDarkMode,
  pageId,
  site,
  title,
  url
}) => {
  return (
    <>
      <PageHead
        pageId={pageId}
        site={site}
        title={title}
        description={description}
        image={image}
        url={url}
      />

      {isLiteMode && <BodyClassName className='notion-lite' />}
      {isDarkMode && <BodyClassName className='dark-mode' />}

      {children}
    </>
  )
}

export default Layout
