import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"

import Landing from "../components/landing/landing"




const IndexPage = () => (
  <Layout>

   <Landing></Landing>
  </Layout>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
