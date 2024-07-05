import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"
import PerfilOpc from "./perfilopc"
import Pipiver from "./popover"


const Header = ({ siteTitle }) => (

  <header>
    <a href="/">
    <StaticImage
        src="../images/Logo_de_Patrimonio_Nacional.svg.png"
        loading="eager"
        width={150}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      </a>
      <div className="headerperfil">
      {/* <PerfilOpc></PerfilOpc> */}
      <Pipiver></Pipiver>
      </div>
      {/* <a href="/profile" role='button' className='aform'>Perfil</a> */}
  </header>
)

export default Header
