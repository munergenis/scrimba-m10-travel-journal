import Card from "./components/Card"
import Header from "./components/Header"
import data from "./data/data"

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} length={data.length} {...item} />
  })

  return (
    <>
      <Header />
      <section className="my-12">{cards}</section>
    </>
  )
}
