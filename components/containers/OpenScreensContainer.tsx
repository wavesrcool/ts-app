/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react'
import * as Base from 'native-base'

interface IOpenScreensContainerLegend {
  top: JSX.Element
  bottom?: JSX.Element
}

interface IOpenScreensContainer {
  legend: IOpenScreensContainerLegend
}

export const OpenScreensContainer: React.FC<IOpenScreensContainer> = ({
  legend,
}: IOpenScreensContainer): JSX.Element => {
  console.log('*functional* OpenScreensContainer ')

  return (
    <Base.Box flex={1} safeAreaTop>
      <Base.Box flex={1}>{legend.top}</Base.Box>

      {legend.bottom ? (
        <Base.Box safeAreaBottom>
          <Base.Divider />
          {legend.bottom}
        </Base.Box>
      ) : null}
    </Base.Box>
  )
}
