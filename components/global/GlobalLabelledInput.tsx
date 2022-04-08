import * as React from 'react'
import * as Base from 'native-base'

interface TypeGlobalLabelledInputLegendLabel {
  value: string
  text?: Base.ITextProps
}

interface TypeGlobalLabelledInputLegend {
  row?: Base.IFlexProps
  column?: Base.IFlexProps
  label: TypeGlobalLabelledInputLegendLabel
  input: Base.IInputProps
}

interface TypeGlobalLabelledInput {
  legend: TypeGlobalLabelledInputLegend
}

export function GlobalLabelledInput({
  legend,
}: TypeGlobalLabelledInput): JSX.Element {
  return (
    <Base.Flex direction={`row`} {...legend.row}>
      <Base.Flex direction={`column`} {...legend.column}>
        <Base.Text {...legend.label.text}>{legend.label.value}</Base.Text>
        <Base.Input {...legend.input} />
      </Base.Flex>
    </Base.Flex>
  )
}
