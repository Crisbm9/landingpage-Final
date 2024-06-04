import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import TandemButton from "../components/button/tandembutton"

import Burbujas from "../components/burbujas/burbujas"
import Landing from "../components/landing/landing"




const IndexPage = () => (
  <Layout>

   <Landing></Landing>
  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
