import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import './Estrelas.css'

export function Estrelas({ num }) {
  const icones = []

  for (let i = 1; i <= Math.floor(num); i++) {
    icones.push(<FaStar key={i}/>)
  }

  if (num % 1 > 0) {
    icones.push(<FaStarHalfAlt key={0.5}/>)
  }

  return (
    <div className="estrelas">
      {icones}
    </div>
  )
}