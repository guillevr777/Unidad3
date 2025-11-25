"use client";
import { useState } from "react";
import TarjetaProducto from "../app-example/components/TarjetaProducto";

const productos = [
  { name: "Auriculares Pro", price: 129.99, image: "https://i.blogs.es/3d1180/blackshark1/1366_2000.jpeg" },
  { name: "Teclado Mecánico", price: 89.99, image: "https://ocelot.com.mx/wp-content/uploads/2023/04/teclado-mecanico-switch-rojo.jpg" },
  { name: "Ratón Gamer", price: 49.99, image: "https://cdn0.uncomo.com/es/posts/2/7/5/conoce_cuales_son_los_mejores_ratones_gaming_53572_orig.jpg" },
  { name: "Monitor 27''", price: 229.99, image: "https://dlcdnwebimgs.asus.com/files/media/0e92cabf-067b-433c-a590-abdf68c9e029/v1/img/kv.jpg" },
];

export default function Page() {
  const [cartCount, setCartCount] = useState(0);

  const handleAdd = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "32px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <h1>Productos</h1>
        <div style={{ fontSize: "24px" }}>
          🛒 {cartCount}
        </div>
      </div>

      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {productos.map((p) => (
          <TarjetaProducto
            key={p.name}
            name={p.name}
            price={p.price}
            image={p.image}
            onAddToCart={handleAdd}
          />
        ))}
      </div>
    </div>
  );
}