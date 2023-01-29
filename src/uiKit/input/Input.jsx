import { StyledInput } from './Input.styled'

const Input = ({
  placeholder,
  type,
  name,
  id,
  value,
  width,
  placeholderColor,
}) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
      value={value}
      width={width}
      placeholderColor={placeholderColor}
    />
  )
}

export default Input
