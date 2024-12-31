type ChildProps= React.ComponentPropsWithoutRef<'input'>
const Child = ({placeholder,autoFocus}:ChildProps) => {
    console.log('child rendered')
  return (
    <div>
      <h1>Child Component</h1>
      <input placeholder={placeholder} autoFocus={autoFocus}/>
    </div>
  )
}

export default Child
