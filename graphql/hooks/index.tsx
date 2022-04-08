import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Mutation = {
  __typename?: 'Mutation'
  confirm_email: Confirm_Email_A
  lambda__0000: Lambda0000a
  lambda__0001: Lambda0001a
  sign_up_confirm: Sign_Up_Confirm_A
}

export type MutationConfirm_EmailArgs = {
  lambda: Confirm_Email_E
}

export type MutationLambda__0000Args = {
  lambda: Lambda0000e
}

export type MutationLambda__0001Args = {
  lambda: Lambda0001e
}

export type MutationSign_Up_ConfirmArgs = {
  lambda: Sign_Up_Confirm_E
}

export type Query = {
  __typename?: 'Query'
  open_ask: Open_Ask_A
}

export type TypesGlobalLambdaOrder = {
  __typename?: 'TypesGlobalLambdaOrder'
  order: Scalars['String']
  path: Scalars['String']
}

export type TypesGlobalMessage = {
  __typename?: 'TypesGlobalMessage'
  order: Scalars['String']
  path: Scalars['String']
  value: Scalars['String']
}

export type Confirm_Email_A = {
  __typename?: 'confirm_email_a'
  message?: Maybe<TypesGlobalMessage>
  pass: Scalars['Boolean']
}

export type Confirm_Email_E = {
  code: Scalars['String']
  email: Scalars['String']
}

export type Lambda0000a = {
  __typename?: 'lambda0000a'
  lambda: TypesGlobalLambdaOrder
  message: Scalars['String']
  pass: Scalars['Boolean']
}

export type Lambda0000e = {
  contact: Scalars['String']
}

export type Lambda0001a = {
  __typename?: 'lambda0001a'
  account?: Maybe<Scalars['String']>
  message?: Maybe<TypesGlobalMessage>
  pass: Scalars['Boolean']
}

export type Lambda0001e = {
  passphrase: Scalars['String']
  value: Scalars['String']
}

export type Open_Ask_A = {
  __typename?: 'open_ask_a'
  message?: Maybe<TypesGlobalMessage>
  pass: Scalars['Boolean']
  value?: Maybe<Scalars['String']>
}

export type Sign_Up_Confirm_A = {
  __typename?: 'sign_up_confirm_a'
  lambda: TypesGlobalLambdaOrder
  message: Scalars['String']
  pass: Scalars['Boolean']
}

export type Sign_Up_Confirm_E = {
  code: Scalars['String']
  contact: Scalars['String']
}

export type _Lambda0000MutationVariables = Exact<{
  lambda: Lambda0000e
}>

export type _Lambda0000Mutation = {
  __typename?: 'Mutation'
  lambda__0000: {
    __typename?: 'lambda0000a'
    pass: boolean
    message: string
    lambda: {
      __typename?: 'TypesGlobalLambdaOrder'
      path: string
      order: string
    }
  }
}

export type _Lambda0001MutationVariables = Exact<{
  lambda: Lambda0001e
}>

export type _Lambda0001Mutation = {
  __typename?: 'Mutation'
  lambda__0001: {
    __typename?: 'lambda0001a'
    pass: boolean
    account?: string | null | undefined
    message?:
      | {
          __typename?: 'TypesGlobalMessage'
          path: string
          order: string
          value: string
        }
      | null
      | undefined
  }
}

export type _SignUpConfirmMutationVariables = Exact<{
  lambda: Sign_Up_Confirm_E
}>

export type _SignUpConfirmMutation = {
  __typename?: 'Mutation'
  sign_up_confirm: {
    __typename?: 'sign_up_confirm_a'
    pass: boolean
    message: string
    lambda: {
      __typename?: 'TypesGlobalLambdaOrder'
      path: string
      order: string
    }
  }
}

export const _Lambda0000Document = gql`
  mutation _lambda0000($lambda: lambda0000e!) {
    lambda__0000(lambda: $lambda) {
      lambda {
        path
        order
      }
      pass
      message
    }
  }
`
export type _Lambda0000MutationFn = Apollo.MutationFunction<
  _Lambda0000Mutation,
  _Lambda0000MutationVariables
>

/**
 * __use_Lambda0000Mutation__
 *
 * To run a mutation, you first call `use_Lambda0000Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `use_Lambda0000Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [lambda0000Mutation, { data, loading, error }] = use_Lambda0000Mutation({
 *   variables: {
 *      lambda: // value for 'lambda'
 *   },
 * });
 */
export function use_Lambda0000Mutation(
  baseOptions?: Apollo.MutationHookOptions<
    _Lambda0000Mutation,
    _Lambda0000MutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<_Lambda0000Mutation, _Lambda0000MutationVariables>(
    _Lambda0000Document,
    options
  )
}
export type _Lambda0000MutationHookResult = ReturnType<
  typeof use_Lambda0000Mutation
>
export type _Lambda0000MutationResult =
  Apollo.MutationResult<_Lambda0000Mutation>
export type _Lambda0000MutationOptions = Apollo.BaseMutationOptions<
  _Lambda0000Mutation,
  _Lambda0000MutationVariables
>
export const _Lambda0001Document = gql`
  mutation _lambda0001($lambda: lambda0001e!) {
    lambda__0001(lambda: $lambda) {
      message {
        path
        order
        value
      }
      pass
      account
    }
  }
`
export type _Lambda0001MutationFn = Apollo.MutationFunction<
  _Lambda0001Mutation,
  _Lambda0001MutationVariables
>

/**
 * __use_Lambda0001Mutation__
 *
 * To run a mutation, you first call `use_Lambda0001Mutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `use_Lambda0001Mutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [lambda0001Mutation, { data, loading, error }] = use_Lambda0001Mutation({
 *   variables: {
 *      lambda: // value for 'lambda'
 *   },
 * });
 */
export function use_Lambda0001Mutation(
  baseOptions?: Apollo.MutationHookOptions<
    _Lambda0001Mutation,
    _Lambda0001MutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<_Lambda0001Mutation, _Lambda0001MutationVariables>(
    _Lambda0001Document,
    options
  )
}
export type _Lambda0001MutationHookResult = ReturnType<
  typeof use_Lambda0001Mutation
>
export type _Lambda0001MutationResult =
  Apollo.MutationResult<_Lambda0001Mutation>
export type _Lambda0001MutationOptions = Apollo.BaseMutationOptions<
  _Lambda0001Mutation,
  _Lambda0001MutationVariables
>
export const _SignUpConfirmDocument = gql`
  mutation _SignUpConfirm($lambda: sign_up_confirm_e!) {
    sign_up_confirm(lambda: $lambda) {
      lambda {
        path
        order
      }
      pass
      message
    }
  }
`
export type _SignUpConfirmMutationFn = Apollo.MutationFunction<
  _SignUpConfirmMutation,
  _SignUpConfirmMutationVariables
>

/**
 * __use_SignUpConfirmMutation__
 *
 * To run a mutation, you first call `use_SignUpConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `use_SignUpConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpConfirmMutation, { data, loading, error }] = use_SignUpConfirmMutation({
 *   variables: {
 *      lambda: // value for 'lambda'
 *   },
 * });
 */
export function use_SignUpConfirmMutation(
  baseOptions?: Apollo.MutationHookOptions<
    _SignUpConfirmMutation,
    _SignUpConfirmMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    _SignUpConfirmMutation,
    _SignUpConfirmMutationVariables
  >(_SignUpConfirmDocument, options)
}
export type _SignUpConfirmMutationHookResult = ReturnType<
  typeof use_SignUpConfirmMutation
>
export type _SignUpConfirmMutationResult =
  Apollo.MutationResult<_SignUpConfirmMutation>
export type _SignUpConfirmMutationOptions = Apollo.BaseMutationOptions<
  _SignUpConfirmMutation,
  _SignUpConfirmMutationVariables
>
