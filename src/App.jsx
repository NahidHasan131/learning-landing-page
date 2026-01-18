import Footer from "./assets/Footer"
import Banner from "./Components/Banner/Banner"
import CommunityBanner from "./Components/Banner/CommunityBanner"
import Hero from "./Components/Hero/Hero"
import Services from "./Components/Services/Services"
import Subscribe from "./Components/Subscribe/Subscribe"


function App() {

  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero></Hero>
      <Services></Services>
      <Banner></Banner>
      <Subscribe></Subscribe>
      <CommunityBanner></CommunityBanner>
      <Footer></Footer>
    </main>
  )
}

export default App
