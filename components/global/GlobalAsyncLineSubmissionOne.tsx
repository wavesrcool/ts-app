import * as React from 'react'
import * as Base from 'native-base'
import { LibPressableAsync } from '../pressable/LibPressableAsync'
import { Feather } from '@expo/vector-icons'
import { LibPrimaryRotate } from '../../app/shapes/lib/primary/LibPrimaryRotate'

interface TypeGlobalAsyncLineSubmissionOneLegendParts {
  col?: Base.IFlexProps
  //row?: Base.IFlexProps
  width: string
  height: string
  input: Base.IInputProps
}

interface TypeGlobalAsyncLineSubmissionOneLegendOrder {
  loading: boolean
  error: boolean
  message?: string
  visible: boolean
  alert: boolean
  status?: string
  header: string
  submit: () => void | Promise<void>
  handle: () => void | Promise<void>
}

interface TypeGlobalAsyncLineSubmissionOneLegend {
  order: TypeGlobalAsyncLineSubmissionOneLegendOrder
  parts: TypeGlobalAsyncLineSubmissionOneLegendParts
}

interface TypeGlobalAsyncLineSubmissionOne {
  legend: TypeGlobalAsyncLineSubmissionOneLegend
}

const presence_create = 2300

export function GlobalAsyncLineSubmissionOne({
  legend,
}: TypeGlobalAsyncLineSubmissionOne): JSX.Element {
  const toast = Base.useToast()

  React.useEffect(() => {
    if (!toast.isActive(legend.order.status)) {
      toast.show({
        id: legend.order.status,
        title: `common:toast.${legend.order.status}`,
      })
    }
  }, [legend.order.alert])

  const __width1 = legend.parts.width ? legend.parts.width : `130px`

  return (
    <Base.Center
      //bg={`blue.600`}
      w={legend.parts.width}
      //h={legend.parts.height}
      p={3}
    >
      <Base.Flex
        direction={`column`}
        {...legend.parts.col}
        w={legend.parts.width}
      >
        <Base.Flex direction={`row`} w={[`97%`, null, null, null, null]}>
          <Base.PresenceTransition
            visible={!legend.order.error}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.83,
              transition: {
                duration: presence_create,
              },
            }}
          >
            <Base.Flex
              direction={`row`}
              w={[__width1, null, null, null, null]}
              //bg={`blue.400`}
              justify={`center`}
            >
              <Base.Text
                py={[`1`, null, null, null, null]}
                px={[`5px`, null, null, null, null]}
                //pl={[`3`, null, null, null, null]}
                fontFamily={[`circular.700`, null, null, null, null]}
                fontWeight={[null, null, null, null, null]}
                fontSize={[`lg`, null, null, null, null]}
                color={[null, null, null, null, null]}
                opacity={[0.83, null, null, null, null]}
                //bg={`red.600`}
              >
                {legend.order.header}
              </Base.Text>
            </Base.Flex>
          </Base.PresenceTransition>
          <Base.PresenceTransition
            visible={legend.order.error}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.73,
              transition: {
                duration: 2300,
              },
            }}
          >
            <Base.Flex
              direction={`row`}
              w={[__width1, null, null, null, null]}
              //bg={`blue.400`}
              justify={`center`}
            >
              <Base.Text
                fontFamily={[`circular.700`, null, null, null, null]}
                fontWeight={[null, null, null, null, null]}
                fontSize={[`md`, null, null, null, null]}
                py={[`3px`, null, null, null, null]}
                color={[null, null, null, null, null]}
                /*
              style={{
                transform: [
                  {
                    scale: 1,
                  },
                ],
              }}
              */
              >
                {legend.order.message === `invalid_number`
                  ? `This number format is not accepted.`
                  : `${legend.order.message}`}
              </Base.Text>
            </Base.Flex>
          </Base.PresenceTransition>
        </Base.Flex>
        <Base.Flex direction={`row`} w={`100%`} justify={`center`}>
          <Base.Input
            {...legend.parts.input}
            InputRightElement={
              <>
                {legend.order.loading ? (
                  <LibPrimaryRotate
                    legend={{
                      order: { scale: 0.83 },
                      parts: { square: { mr: [`4`, null, null, null, null] } },
                    }}
                  />
                ) : (
                  <Base.Pressable
                    mr={[`17px`, null, null, null, null]}
                    opacity={[0.73, null, null, null, null]}
                    onPress={legend.order.handle}
                  >
                    {({ isPressed }) => (
                      <Base.Square
                        opacity={[
                          isPressed ? 0.6 : 0.8,
                          null,
                          null,
                          null,
                          null,
                        ]}
                        style={{
                          transform: [
                            {
                              scale: isPressed ? 0.92 : 1,
                            },
                          ],
                        }}
                      >
                        <Feather
                          name="alert-circle"
                          size={20}
                          color={legend.order.error ? `black` : `transparent`}
                        />
                      </Base.Square>
                    )}
                  </Base.Pressable>
                )}
              </>
            }
          />
        </Base.Flex>

        <Base.Flex
          direction={`row`}
          w={`100%`}
          justify={`flex-end`}
          //justify={legend.order.error ? `center` : `flex-end`}
          pr={1}
          //bg={`red.600`}
        >
          <Base.PresenceTransition
            visible={legend.order.visible && !legend.order.error}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.9,
              transition: {
                duration: 250,
              },
            }}
          >
            <LibPressableAsync
              legend={{
                order: {
                  press: legend.order.submit,
                  guide: (
                    <Base.Box py={`0px`} opacity={[0.87]}>
                      <Feather name={`arrow-right`} color={`gray`} size={18} />
                    </Base.Box>
                  ),
                  /*(
                  <Base.Spinner size={`sm`} color={`transparent`} />
                ) : (
                  
                ),*/
                },
                parts: {
                  box: {
                    //@todo add back
                    //variant: `one`,
                    mt: [`10px`],
                    w: [`40px`],
                    bg: `gray.200`,
                    opacity: 0.67,
                    py: `5px`,
                    borderRadius: `xl`,
                  },
                },
              }}
            />
          </Base.PresenceTransition>
        </Base.Flex>
      </Base.Flex>
    </Base.Center>
  )
}
