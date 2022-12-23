import { parsePageId, uuidToId } from 'notion-utils'

import { getCanonicalPageId } from './get-canonical-page-id'
import { Site } from './types'

export const mapPageUrl =
  (site: Site, searchParams: URLSearchParams) =>
  (pageId = '') => {
    const pageUuid = parsePageId(pageId, { uuid: true })

    if (uuidToId(pageUuid) === site.rootNotionPageId) {
      return createUrl('/', searchParams)
    } else {
      return createUrl(`/${getCanonicalPageId(pageUuid)}`, searchParams)
    }
  }

export const getCanonicalPageUrl =
  (site: Site) =>
  (pageId = '') => {
    const pageUuid = parsePageId(pageId, { uuid: true })

    if (uuidToId(pageId) === site.rootNotionPageId) {
      return `https://${site.domain}`
    } else {
      return `https://${site.domain}/${getCanonicalPageId(pageUuid)}`
    }
  }

function createUrl(path: string, searchParams: URLSearchParams) {
  return [path, searchParams.toString()].filter(Boolean).join('?')
}
