import React from "react";
import Layout from "../components/layout";
import Usuarios from "../components/tabla-usuarios";
function AdminUsuarios(){
return(
    <>
    <Layout>
    <h1>Lista de usuarios</h1>
    <Usuarios></Usuarios>
    </Layout>
    </>
)
}
export default AdminUsuarios