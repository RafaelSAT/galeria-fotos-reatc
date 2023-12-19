import { Foto } from "@/types/Foto"

type Props = {
    foto: Foto;
    onClick: () => void;
}

export const FotoItem = ({ foto, onClick }: Props) => {
    return(
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <img src={`/img/${foto.url}`} alt="" className="w-full" />
        </div>
    );
}