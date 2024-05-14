import { PropsWithoutRef } from 'react'

type ButtonProps = PropsWithoutRef<JSX.IntrinsicElements['button']> & {}

const Button = (props: ButtonProps) => {
  return <button></button>
}
