import * as React from "react"
import cn from "classnames"

interface IProps {
  type: string
  className?: string
  onClick?: (e?: React.MouseEvent<HTMLSpanElement>) => void
}

const Icon: React.FC<IProps> = (props: IProps) => {
  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    props.onClick && props.onClick(event)
  }
  
  return (
    <span
      className={cn("iconfont", `icon${props.type}`, props.className)}
      onClick={handleClick}
    />
  )
}

export default Icon
