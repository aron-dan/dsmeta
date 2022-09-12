import NotificationButton from "./assets/components/Buttom"
import Header from "./assets/components/Header"
import SalesCard from '../src/assets/components/SalesCard'



function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>

    </>
  )
}

export default App