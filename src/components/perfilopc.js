import React from "react"
import Pipiver from './popover';
const PerfilOpc = () => {
const ide= localStorage.getItem('tandem_id')
if(ide){
return(
<Pipiver></Pipiver>
)
}
}
export default PerfilOpc