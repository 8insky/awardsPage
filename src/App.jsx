import Hero from "./components/Hero"
import About from "./components/About"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main className="bg-zinc-400">

      <Navbar/>
      <Hero className ='relative min-h-screen w-screen overflow-x-hidden '/>
      <About/>
    </main>
  )
}

export default App