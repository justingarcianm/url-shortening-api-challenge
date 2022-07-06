import GlobalStyle from "./global.styled"
import Nav from "./components/Nav/Nav"
import Hero from "./components/Hero/Hero"
import Form from "./components/Form/Form"
import Stats from "./components/Stats/Stats"
import CTA from "./components/CTA/CTA"
import Footer from "./components/Footer/Footer"

const App = () => {
    return <>
        <GlobalStyle />
        <Nav />
        <Hero />
        <Form />
        <Stats />
        <CTA />
        <Footer />
    </>
}

export default App