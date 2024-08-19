import Counter from "../components/counter"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

function Home() {
  
    return (
      <>
      <Navbar/>
      <section className="counter">
        <div className="container">
            <p></p>
            <div className="stats">
                <div className="title">

                </div>
                <Counter/>
                <div className="subtitle">
                    
                </div>
            </div>
        </div>
      </section>
      <section className="relapsing-check">

      </section>
      <section className="leaders-board">

      </section>
      <section className="latest-articles">

      </section>
      <Footer/>
      </>
    )
  }
export default Home