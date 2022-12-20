export interface PropsTyped{
    title: string,
    color?: "red" | "blue" |"orange"
}
function Header(props: PropsTyped) {
  return (
    <header>
        <h1 style={{color:props?.color}}>{props.title}</h1>
    </header>
  )
}

export default Header