import { feedbacks } from "@/feedbacks";
import Feedback from "@/components/Feedback";

const SectionFeedback = () => {
  return (
    <section>
        <div className=" bg-colorGray py-8 flex flex-col flex-wrap items-center gap-6  md:flex-row md:justify-around ">
          {feedbacks.map(({ id, nome, texto }) => (
            <Feedback key={id} nome={nome} texto={texto} />
          ))}
        </div>
      </section>
  )
}

export default SectionFeedback