import { useState } from "react"
import { Description } from "./Description"
import { Gallery } from "./Gallery"
import { ProductInfo } from "./ProductInfo"

const prod = {
  name: 'Pileta Redonda 5500Lts 3Mts',
  sku: '123456',
  price: '120.000',
  stock: 10,
  images: [ 'pileta.jpg', 'pileta-muestra.jpg', 'pileta-empaque.jpg' ],
  description: '<p>Con ésta pileta circular Sol de Verano <strong>Sol Arco 10</strong> la diversión en los días calurosos, está asegurada.<br/>En éste producto sólo se permiten juegos divertidos, risas compartidas y muchas tardes de verano en familia.<br/>Por su forma redonda y su tamaño amplio y cómodo de 3 Mts de diámetro los meses de calor serán tus preferidos del año.<br/>Es práctica y fácil de armar, sólo necesitás un espacio despejado en tu patio.<br/>Gracias a su tapón de vaciado, vas a poder sacar el agua de una manera mucho más rápida y simple cuando desees limpiarla o vaciarla.<br/>Queda inaugurado el verano, ¡prohibido no disfrutarlo!<p/><h3>Características De La Pileta:</h3><p>Pileta estructural desarmable confeccionada en lona de tejido poliéster recubierto con PVC.<br/>Estructura en caños galvanizados aptos para soportar altas presiones de agua.<br/>Fácil limpieza, armado y desarmado.<br/><strong>Alto:</strong> 0,76 Mts<br/><strong>Diámetro:</strong> 3,00 Mts<br/><strong>Capacidad:</strong> 5.500 Lts<p/><h3>Dimensiones del Embalaje:</h3><p><strong>Largo:</strong> 1,20 Mts<br/><strong>Alto:</strong> 0,18 Mts<br/><strong>Ancho:</strong> 0,40 Mts<br/><strong>Peso:</strong> 25,60 Kg<p/>'
}

export const ProductDetails = () => {
  const { description, images, ...productInfo } = prod;
  const [product, setProduct] = useState(productInfo);

  const handleBuy = (e, quantity) => {
    e.preventDefault();

    if(product.stock === 0) return alert('No hay stock');

    if(quantity < 1 || !Number.isInteger(+quantity)) return alert('Elige cantidad válida');

    if(quantity > product.stock) return alert('No hay stock de la cantidad indicada');

    const newStock = product.stock - quantity;
   
    setProduct({...product, stock: newStock});

    alert(`Compraste ${quantity} unid. de ${product.name}`);
  };

  return (
    <main>
      <div className="product-details container">
        <Gallery imgsNames={images}/>
        <ProductInfo product={product} handleBuy={handleBuy}/>
        <Description descriptionText={description}/>
      </div>
    </main>
  )
}
