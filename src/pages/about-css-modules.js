import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
    </Container>
  )
}

console.log(styles)