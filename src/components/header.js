import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"


const Header = ({ siteTitle }) => (
  <header
    // style={{
    //   margin: `0`,
    //   padding: `var(--space-4) var(--size-gutter)`,
    //   display: `flex`,
    //   alignItems: `center`,
    //   justifyContent: `space-between`,
    // }}
  >
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
  </header>
)

export default Header
