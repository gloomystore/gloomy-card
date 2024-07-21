import Home from "./Home";
import { getCards } from './api/cards' 

export default async function Root() {
  const cards = await getCards()

  return (
    <>
      <Home cards={cards} />
    </>
  )
}