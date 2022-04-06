import { getFotosSobre } from "../../../services/routes/sobre";
import ImagensGrid from "../../ImagensGrid/ImagensGrid";
import { useMediaQuery } from "react-responsive";

const ImagensSobre = (props) => {
  const tablet = useMediaQuery({
    query: "(max-width:1024px)",
  });
  const celular = useMediaQuery({
    query: "(max-width:380px)",
  });

  if (celular) {
    return (
      <ImagensGrid src1={`${getFotosSobre}${props.fotos.celular}.png`} />
    );
  } else if (tablet && !celular) {
    return (
      <ImagensGrid
        src1={`${getFotosSobre}${props.fotos.tablet[0]}.png`}
        src2={`${getFotosSobre}${props.fotos.tablet[1]}.png`}
        src3={`${getFotosSobre}${props.fotos.tablet[2]}.png`}
        src4={`${getFotosSobre}${props.fotos.desktop[3]}.png`}
      />
    );
  } else {
    return (
      <ImagensGrid
        src1={`${getFotosSobre}${props.fotos.desktop[0]}.png`}
        src2={`${getFotosSobre}${props.fotos.desktop[1]}.png`}
        src3={`${getFotosSobre}${props.fotos.desktop[3]}.png`}
        src4={`${getFotosSobre}${props.fotos.desktop[2]}.png`}
      />
    );
  }
};


export default ImagensSobre 
