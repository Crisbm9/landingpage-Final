import * as React from 'react'

function AlertButton({message,children}){
  return(
    <button onClick={function() {
      alert(message)
    }}>
      <b>{children}</b>
    </button>
  )
}
export default AlertButton

// import { Link } from 'gatsby';

// const AlertButton = () => (
//   <Link to=".../pages/page-2.js">Ir a la página 2</Link>
// );

// export default AlertButton;