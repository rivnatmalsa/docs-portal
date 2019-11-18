import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import styled from "styled-components"

//Styled components
const StyledSearch = styled.div`
  input {
    width: 100%;
  }
`

export default class Search extends Component {
  state = {
    query: ``,
    results: [],
  }

  render() {
    return (
      <StyledSearch>
        <input type="text" value={this.state.query} onChange={this.search} />
        <ul>
          {this.state.results.map(page => (
            <li key={page.id}>
              <Link to={"/" + page.path}>{page.title}</Link>
              {": " + page.tags}
            </li>
          ))}
        </ul>
      </StyledSearch>
    )
  }

  getOrCreateIndex = () => {
    return this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)
  }

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an \[\] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => {
          return this.index.documentStore.getDoc(ref)
        }),
    })
  }
}
