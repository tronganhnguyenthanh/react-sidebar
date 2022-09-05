import React, {useState} from "react"
import {IntlProvider} from "react-intl"
import "../../src/style.scss"
import Layout from "../components/Layout"
import messages from "../messages/messages"
const App = () => {
  const [locale, setLocale] = useState("en")
  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Layout setLocale={setLocale}/>
      </IntlProvider>
    </div>
  )
}
export default App
