import { isFullPage } from '@notionhq/client'
import {
  PageObjectResponse,
  QueryDatabaseParameters
} from '@notionhq/client/build/src/api-endpoints'

import { notionhq } from './notion-api'

export async function getDatabase(id: string) {
  const db = await notionhq.databases.retrieve({ database_id: id })

  return db
}

/**
 * Use official notion sdk because notion-client-x is not support to query database.
 * @param id database id
 * @returns
 */
export async function queryDatabase(
  props: QueryDatabaseParameters
): Promise<Array<PageObjectResponse>> {
  let results: Array<PageObjectResponse> = []
  try {
    const pages = await notionhq.databases.query(props)
    results = results.concat(pages.results.filter(isFullPage))

    if (pages.has_more) {
      const nextPages = await queryDatabase({
        ...props,
        start_cursor: pages.next_cursor
      })
      results = results.concat(nextPages)
    }
    return results
  } catch (e) {
    console.error(e)
    throw e
  }
}
