import * as React from 'react'

import { useSearchParam } from 'react-use'

export function useLiteMode() {
  const lite = useSearchParam('lite')

  // lite mode is for oembed
  const isLiteMode = React.useMemo(() => lite === 'true', [lite])

  return isLiteMode
}
