import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const Styledh1 = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: bold;
  color: #e47911;
  padding-top: 20px;
`

const StyledDate = styled.p`
  font-size: 14px;
  padding-top: 5px;
`

export default () => {
  return (
    <Layout>
      <article>
        <header>
          <Styledh1>Getting Started</Styledh1>
        </header>
        <StyledDate>November 25, 2019</StyledDate>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat
          consectetur iste quia adipisci. Ab doloribus suscipit porro optio est
          aperiam, enim officia provident amet impedit quidem explicabo error
          tenetur!
        </section>
        <hr />
      </article>
    </Layout>
  )
}
