export const Background = (props) => {
  return( 
    <div style={{ backgroundColor: props.backgroundColor , height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{props.children}</div> 
  )
}