import { Arrival } from "../components/Arrival"
import { Category } from "../components/Category"
import { Newitems } from "../components/Newitems"
import { TopSlides } from "../components/TopSlides"


export const Home = () => {
  return (
    <div className="mt-[70px]">
      <TopSlides />
      <Arrival />
      <Newitems />
      <Category />
    </div>
  )
}
