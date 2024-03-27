import Principles from "./Principles"
import { principles } from "@/principles"

const SectionPrinciplesBox = () => {
  return (
    <div className="flex flex-col py-8 ">
      <h2 className="mx-auto text-6xl font-semibold text-center">Mais sobre nós</h2>
      <div className="flex justify-around flex-wrap py-8 gap-8">
        {principles.map(({id,title,text})=>(
          <div key={id}>
            <Principles title={title} text={text}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionPrinciplesBox