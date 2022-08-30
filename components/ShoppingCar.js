import { useAppContext } from "./StateWrapper"
import CardProduct from "./CardProduct"
import Button from 'react-bootstrap/Button';


import style from "../styles/ShoppingCar.module.css"

export default function ShoppingCar(){
    const Car = useAppContext();

    function handleBarCar(){
        Car.handleBarCar();
    }

    function handleSend(){
        Car.handleSend();
    }

    return(
        <div className={`shadow-lg ${style.barCar}`} style={{display: Car.isOpen ? "block" : "none"}}>
            <button className={`btn text-white btn-sm ms-2 mt-1 ${style.button}`} onClick={handleBarCar}>Cerrar</button>

            { Car.items.length === 0 
             ? 
            <span className={`fs-6 fw-bold text-center ${style.span}`}>
                El carrito está vacio.
                <br />
                <i className="bi bi-cart4 fs-1"></i>
            </span>
             : 
            <div className={`${style.shoppingContainer}`}>
                <h5 className="fs-6 fw-bold mt-2 ms-2">Tus Productos</h5>
                <div>
                    {Car.items.map((item)=> <CardProduct key={item.id} item={item} showAs={"listItem"} qty={item.qty}/>)}
                </div>
                <p className={`text-end fw-bold`}>Total: ${Car.totalPrice().toLocaleString("es-ES")}</p>
                <div className="d-flex justify-content-end">
                    <Button className={`shadow-none me-1 mt-1 btn-sm ${style.button}`} onClick={handleSend}>
                        Enviar pedido.
                    </Button>
                </div>
            </div>
            }
        </div>
    )
}