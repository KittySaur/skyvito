import { StyledInput } from './Input.styled'
import React from 'react'

const Input = React.forwardRef((props, ref) => {
  return (
    <StyledInput
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      id={props.id}
      value={props.value}
      width={props.width}
      placeholderColor={props.placeholderColor}
      onClick={props.onClick}
      onChange={props.onChange}
    />
  )
})

export default Input
