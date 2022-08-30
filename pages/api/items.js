// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id:0,
      title: "Gas Pimienta",
      price: 17000,
      image: "http://localhost:3000/img/gasPimienta.jpg",
      description: "Producto aturdidor."
    },
    {
      id:1,
      title: "Taser",
      price: 40000,
      image: "http://localhost:3000/img/taser.jpg",
      description: "Producto de alto voltaje, ideal para la defensa personal y aturdir."
    },
    {
      id:2,
      title: "Alarma",
      price: 22000,
      image: "http://localhost:3000/img/alarma.jpg",
      description: "Producto ideal para captar la atencion de las personas y alejar al delincuente."
    },
    {
      id:3,
      title: "Kubotan",
      price: 16000,
      image: "http://localhost:3000/img/kubotan.jpg",
      description: "Producto corto punzante para defensa personal."
    },
    {
      id:4,
      title: "Rompevidrios",
      price: 16000,
      image: "http://localhost:3000/img/rompevidrios.jpg",
      description: "Martillo de seguridad para romper vidrios y/o cinturones."
    },
    {
      id:5,
      title: "Kit basico",
      price: 55000,
      image: "http://localhost:3000/img/kitbasico.jpg",
      description: "Kit de gas pimienta y Taser."
    },
    {
      id:6,
      title: "Kit llavero",
      price: 75000,
      image: "http://localhost:3000/img/llaveroKit.jpg",
      description: "Kit con gas pimienta, rompevidrios, alarma, kubotan y pompom"
    },
  ])
}
