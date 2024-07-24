import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"
import PerfilOpc from "./perfilopc"


const Header = ({ siteTitle }) => (
  <header>
    <a href="/">
    <StaticImage
        src="../images/Logo_de_Patrimonio_Nacional.svg.png"
        loading="eager"
        width={200}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)`}}
      />
      </a>
      <div className="headerperfil">
     
      <PerfilOpc></PerfilOpc>
      </div> 
      
  </header>
)

export default Header
