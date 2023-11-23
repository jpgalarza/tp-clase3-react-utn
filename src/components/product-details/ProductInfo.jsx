import { useState } from "react";

//Este componente también se puede dividir en 2 Componentes

export const ProductInfo = ({ product: {name, sku, price, stock}, handleBuy}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="general-info">
      <div className="product-info">
        <h1>{name}</h1>
        <p><strong>SKU:</strong> {sku}</p>
        <h2>{`$${price}`}</h2>
        <p><strong>Cantidad disponible:</strong>{` ${stock} unid.`}</p>
        <form className="buy-wrapper" onSubmit={(e) => handleBuy(e, quantity)}>
          <input 
            id="quantity" 
            type="number" 
            value={quantity}
            min={1}
            step={1}
            onChange={(e) => setQuantity(e.target.value)} 
          />
          <button type="submit" id="buy-btn">Comprar</button>
        </form>
      </div>
      <div className="info-extra">
        <h2>Medios de Pago:</h2>
        <a href="">💳 3 cuotas s/int con Banco Provincia</a>
        <a href="">💳 6 cuotas s/int com Banco Nación</a>
        <a href="">💳 Otras promociones bancarias</a>
        <h2>Formas de Envío:</h2>
        <a href="">🚛 Envío a domicilio</a>
        <a href="">🏬 Retiro gratis en sucursales</a>
      </div>
    </section>
  )
}
