import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import { IoReturnDownBack } from "react-icons/io5";


export default function ContactForm() {
  const [state, handleSubmit] = useForm("mzbngoyz");
  if (state.succeeded) {
    return (
      <div className="h-96 flex flex-col justify-around">
        <div>
            <h2 className="text-colorWhite text-4xl font-bold pt-8">Obrigado por entrar em contato.</h2>
            <p className="text-colorWhite text-2xl font-bold ">Em breve, eu lhe darei um retorno.</p>
        </div>
        <div className=" flex items-center gap-2 text-colorPrimary justify-center" onClick={() => window.location.reload()}>
            <p className="text-7xl cursor-pointer"><IoReturnDownBack /></p>
            <p className="text-base cursor-pointer">Voltar</p>
        </div>
      </div>
    );
  }
  return (
    <form className="flex flex-col gap-6 md:w-1/2  " onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="font-semibold text-colorPrimary " htmlFor="name">Nome</label>
        <input className="h-12 rounded-sm px-4 border-solid border-2 border-colorBlack" placeholder="Digite seu nome" id="name" type="text" name="name" />
        <ValidationError prefix="name" field="name" errors={state.errors} />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-colorPrimary " htmlFor="email">E-mail</label>
        <input className="h-12 rounded-sm px-4 border-solid border-2 border-colorBlack" placeholder="Digite e-mail" id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-colorPrimary " htmlFor="subject">Assunto</label>
        <input className="h-12 rounded-sm px-4 border-solid border-2 border-colorBlack" placeholder="Digite o assunto" id="subject" type="subject" name="subject" />
        <ValidationError
          prefix="subject"
          field="subject"
          errors={state.errors}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold text-colorPrimary " htmlFor="message">Mensagem</label>
        <textarea className="h-24 px-4 border-solid border-2 border-colorBlack" placeholder="Digite sua proposta, ou apenas me diga olá :)" id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <div className="flex justify-center">
        <button className="md:w-1/4 w-full  text-colorWhite bg-colorGreen h-10 text-colorAlmostBlack hover:scale-105 font-semibold rounded-sm" type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </div>
    </form>
  );
}
