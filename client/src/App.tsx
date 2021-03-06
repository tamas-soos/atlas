import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { styled } from "baseui"

import { Home, Login, Signup, Account } from "./pages"
import { PrivateRoute, Navbar } from "./components"
import { dispatch } from "./action$"
import { loginSuccess } from "./actions/session"

const Container = styled("div", {
  height: "100%",
})

export default function App(): JSX.Element {
  useEffect(() => {
    try {
      const auth = JSON.parse(localStorage.getItem("atlas-auth") || "")
      if (auth) dispatch(loginSuccess(auth))
    } catch (error) {
      // ignore
    }
  }, [])

  return (
    <Container>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/account" component={Account} />
      </Switch>
    </Container>
  )
}
