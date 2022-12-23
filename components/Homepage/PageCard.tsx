import * as React from 'react'
import Image from 'next/image'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

type Props = {
  img: string
  title: string
}
const PageCard: React.FC<Props> = ({ img, title }) => {
  return (
    <Card>
      <CardMedia sx={{ height: '250px' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image src={img} layout='fill' objectFit='cover' />
        </div>
      </CardMedia>
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
    </Card>
  )
}

export default PageCard
