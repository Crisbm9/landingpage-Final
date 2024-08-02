import React from "react";
import Layout from "../components/layout";
import Usuarios from "../components/usuarios";
function AdminUser(){
return(
    <>
    <Layout>
    <Usuarios url='https://cristina.tandempatrimonionacional.eu/api-qr-tandem/v1/list-users.php'></Usuarios>
    </Layout>
    </>
)
}
export default AdminUser