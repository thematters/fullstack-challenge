import { FC } from 'react'
import Image from 'next/image'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

interface IconImageProps {
  src: string
  size: number
  tooltip?: string
  onClick?: () => void
}

const IconImage: FC<IconImageProps> = ({ src, size, tooltip = '', onClick = () => {} }) => {
  return (
    <Tooltip title={tooltip} arrow>
      <IconButton onClick={onClick}>
        <Image priority src={src} width={size} height={size} alt={src} />
      </IconButton>
    </Tooltip>
  )
}

export default IconImage
