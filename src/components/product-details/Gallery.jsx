import { useState } from "react";

export const Gallery = ({ imgsNames }) => {
  const [imgSelected, setImgSelected] = useState({index:0, name: imgsNames[0]});

  const handleSelected = (nameImg) => {
    setImgSelected(nameImg);
  }

  const nextImg = () => {
    if(imgSelected.index >= imgsNames.length-1) return;

    setImgSelected({index: imgSelected.index + 1, name: imgsNames[imgSelected.index + 1]});
  }

  const prevImg = () => {
    if(imgSelected.index === 0) return;

    setImgSelected({index: imgSelected.index - 1, name: imgsNames[imgSelected.index - 1]});
  }
  
  return (
    <section className="gallery">
      <div className="images">
        {imgsNames.map((imgName, index) => (
          <Img key={index} img={{index, name:imgName}} selectImg={handleSelected}/>
        ))}
      </div>
      <div className="image">
        <Img img={imgSelected}/>
        <div className="btns-wrapper">
          <p onClick={prevImg}>Anterior</p>
          <p onClick={nextImg}>Siguiente</p>
        </div>
      </div>
    </section>
  );
};

const Img = ({ img, selectImg}) => (
  <img 
    src={`../../../public/images/${img.name}`} 
    alt={img.name} 
    onClick={selectImg? () => selectImg(img) : undefined}
  />
);

