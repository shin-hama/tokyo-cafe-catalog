import * as React from 'react'

import * as types from 'notion-types'
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import { getPageBreadcrumbs } from 'notion-utils'
import { PageIcon, cs, useNotionContext } from 'react-notion-x'

import { site } from '@/lib/config'

type Props = {
  block: types.Block
}
const Breadcrumbs: React.FC<Props> = ({ block }) => {
  const { recordMap, mapPageUrl, components } = useNotionContext()

  const breadcrumbs = React.useMemo(() => {
    return getPageBreadcrumbs(recordMap, block.id)
  }, [recordMap, block.id])

  return (
    <MuiBreadcrumbs className='breadcrumbs' key='breadcrumbs'>
      <components.PageLink href={'/'} className={'breadcrumb'}>
        <span className='title'>{site.name}</span>
      </components.PageLink>
      {breadcrumbs.map((breadcrumb) => {
        if (!breadcrumb) {
          return null
        }

        const pageLinkProps: any = {}
        const componentMap = {
          pageLink: components.PageLink
        }

        if (breadcrumb.active) {
          componentMap.pageLink = (props) => <div {...props} />
        } else {
          pageLinkProps.href = mapPageUrl(breadcrumb.pageId)
        }

        return (
          <componentMap.pageLink
            key={breadcrumb.pageId}
            className={cs('breadcrumb', breadcrumb.active && 'active')}
            {...pageLinkProps}
          >
            {breadcrumb.icon && (
              <PageIcon className='icon' block={breadcrumb.block} />
            )}

            {breadcrumb.title && (
              <span className='title'>{breadcrumb.title}</span>
            )}
          </componentMap.pageLink>
        )
      })}
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs
