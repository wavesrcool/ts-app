import * as React from 'react'
import * as Base from 'native-base'

interface ILibPressableAsyncLegendOrder {
  guide: JSX.Element
  variant?: string
  press: () => void | Promise<void>
}

interface ILibPressableAsyncLegendParts {
  box: Base.IBoxProps
}

interface ILibPressableAsyncLegend {
  order: ILibPressableAsyncLegendOrder
  parts: ILibPressableAsyncLegendParts
}

interface ILibPressableAsync {
  legend: ILibPressableAsyncLegend
}

export function LibPressableAsync({ legend }: ILibPressableAsync): JSX.Element {
  return (
    <Base.Pressable onPress={legend.order.press}>
      {({ /*isHovered, isFocused,*/ isPressed }) => {
        return (
          <Base.Box
            {...legend.parts.box}
            style={{
              transform: [
                {
                  scale: isPressed ? 0.93 : 1,
                },
              ],
            }}
          >
            <Base.Center>{legend.order.guide}</Base.Center>
          </Base.Box>
        )
      }}
    </Base.Pressable>
  )
}
