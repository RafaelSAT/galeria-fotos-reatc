type Props = {
    imagem: string;
    fecharModal: () => void;
}

export const Modal = ({imagem, fecharModal}:Props) => {
    return (
        <>
            <div onClick={fecharModal} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
                <img src={`/img/${imagem}`} className="max-w-screen max-h-screen"/>
            </div>
            <div onClick={fecharModal} className="fixed top-3 right-5 w-10 h-10 cursor-pointer text-white text-5xl">
                x
            </div>
        </>
    );
}