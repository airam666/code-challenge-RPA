import React from "react"
import Header from "./header/header"

class Layout extends React.Component {
  render(){
    return (
      <>
        <Header />
        <main>{this.props.children}</main>
      </>
    )
  }
}
export default Layout;