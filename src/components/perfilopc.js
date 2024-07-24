import React from "react"
import Pipiver from './pipiver';
const PerfilOpc = () => {
const ide= localStorage.getItem('tandem_id')
if(ide){
return(
<Pipiver></Pipiver>
)
}
}
export default PerfilOpc