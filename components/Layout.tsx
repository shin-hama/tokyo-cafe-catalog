import * as React from 'react'

import BodyClassName from 'react-body-classname'

import * as types from '@/lib/types'
import { useDarkMode } from '@/lib/use-dark-mode'
import { useLiteMode } from '@/lib/use-lite-mode'

import { PageHead } from './PageHead'

type Props = React.PropsWithChildren & types.PageHeadProps
const Layout: React.FC<Props> = ({
  children,
  description,
  image,
  pageId,
  site,
  title,
  url
}) => {
  const { isDarkMode } = useDarkMode()
  const isLiteMode = useLiteMode()

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
