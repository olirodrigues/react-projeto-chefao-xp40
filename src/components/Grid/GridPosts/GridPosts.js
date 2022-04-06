import ImagensGrid from "../ImagensGrid/ImagensGrid";
import { useMediaQuery } from "react-responsive";

const GridPosts = (props) => {
  const tablet = useMediaQuery({
    query: "(max-width:1024px)",
  });
  const celular = useMediaQuery({
    query: "(max-width:380px)",
  });

  if (celular) {
    return <ImagensGrid src1={`${props.urlFotos}${props.fotos.celular}.png`} />;
  } else if (tablet && !celular) {
    return (
      <ImagensGrid
        src1={`${props.urlFotos}${props.fotos.tablet[0]}.png`}
        src2={`${props.urlFotos}${props.fotos.tablet[1]}.png`}
        src3={`${props.urlFotos}${props.fotos.tablet[2]}.png`}
      />
    );
  } else {
    return (
      <ImagensGrid
        src1={`${props.urlFotos}${props.fotos.desktop[0]}.png`}
        src2={`${props.urlFotos}${props.fotos.desktop[1]}.png`}
        src3={`${props.urlFotos}${props.fotos.desktop[3]}.png`}
        src4={`${props.urlFotos}${props.fotos.desktop[2]}.png`}
      />
    );
  }
};

export default GridPosts;
