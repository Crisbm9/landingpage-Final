import React from "react"
const PerfilOpc = () => {
const ide= localStorage.getItem('tandem_id')
if(ide){
return(
 <a href="/profile" role='button' className='button23'>{localStorage.getItem('tandem_nombre')}</a>
)
}
}
export default PerfilOpc