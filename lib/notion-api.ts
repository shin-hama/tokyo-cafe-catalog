import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'

export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL
})

export const notionhq = new Client({
  auth: process.env.NOTION_TOKEN
})
