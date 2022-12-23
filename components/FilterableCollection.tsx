import * as React from 'react'
import dynamic from 'next/dynamic'

import {
  CollectionViewBlock,
  CollectionViewPageBlock,
  PageBlock
} from 'notion-types'
import { NotionContext } from 'react-notion-x'

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
)

type Props = {
  block: CollectionViewBlock | CollectionViewPageBlock | PageBlock
  className?: string
  ctx: NotionContext
}
const FilterableCollection: React.FC<Props> = (props) => {
  console.log(props)
  return (
    <>
      <div>test</div>
      <Collection {...props} />
    </>
  )
}
export default FilterableCollection
