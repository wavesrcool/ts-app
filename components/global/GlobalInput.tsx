import * as React from 'react'
import * as Base from 'native-base'

interface TypeGlobalInputLegend {
  row?: Base.IFlexProps
  input: Base.IInputProps
}

interface TypeGlobalInput {
  legend: TypeGlobalInputLegend
}

export function GlobalInput({ legend }: TypeGlobalInput): JSX.Element {
  return (
    <Base.Flex direction={`row`} {...legend.row}>
      <Base.Input {...legend.input} />
    </Base.Flex>
  )
}
