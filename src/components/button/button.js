import * as React from 'react'

function AlertButton(){
  return(
    <a href="page-2" role='button' className='button'>Acceso empleados</a>
  )
}
export default AlertButton

// function AlertButton({message,children}){
//   return(
//     <button onClick={function() {
//       alert(message)
//     }}>
//       <b>{children}</b>
//     </button>
//   )
// }
// export default AlertButton
