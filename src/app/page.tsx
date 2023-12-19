"use client"

import { FotoItem } from "@/components/FotoItem";
import { Modal } from "@/components/Modal";
import { fotoLista } from "@/data/fotoLista";
import { useState } from "react";

export default function Home() {

  const [mostrarModal, setMostrarModal] = useState(false);
  const [imagemModal, setImagemModal] = useState('');

  const abrirModal = (id: number) => {
    const foto = fotoLista.find(item => item.id === id);
    if(foto){
      setImagemModal(foto.url);
      setMostrarModal(true);
    }
  }

  const fecharModal = () => {
    setMostrarModal(false);
  }

  return (
    <div className="bg-black h-screen">
      <h1 className="text-center text-3xl font-bold mb-10 text-white">Fotos</h1>
      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fotoLista.map(item => (
          <FotoItem            
            foto={item}
            onClick={() => abrirModal(item.id)}
          />
        ))}
      </section>

      {mostrarModal &&
        <Modal imagem={imagemModal} fecharModal={fecharModal} />
      }
    </div>
  )
}
