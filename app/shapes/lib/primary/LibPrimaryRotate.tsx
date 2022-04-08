import * as React from 'react'
import * as Base from 'native-base'

interface ILibPrimaryRotateLegend {
  order: ILibPrimaryRotateLegendOrder
  parts?: ILibPrimaryRotateLegendParts
}

interface ILibPrimaryRotateLegendOrder {
  scale?: number
}

interface ILibPrimaryRotateLegendParts {
  square: Base.ISquareProps
}

interface ILibPrimaryRotate {
  legend?: ILibPrimaryRotateLegend
}

export function LibPrimaryRotate({ legend }: ILibPrimaryRotate): JSX.Element {
  return (
    <Base.Square
      {...legend?.parts?.square}
      style={{
        transform: [
          {
            scale: legend?.order.scale ? legend?.order.scale : 0.8,
          },
        ],
      }}
    >
      <Base.Spinner size={`sm`} color={`black`} />
    </Base.Square>
  )
}
