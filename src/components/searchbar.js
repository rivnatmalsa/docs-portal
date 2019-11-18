import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Search from "./search"

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => <Search searchIndex={data.siteSearchIndex.index} />}
    />
  )
}
