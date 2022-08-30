import Navbarr from "../components/Navbar";
import Footer from "../components/Footer";

import style from '../styles/Pyr.module.css';

export default function Pyr(){
    return(
        <>
            <Navbarr title={'PyR'}>
                <div className={`${style.pyr} text-white`}>
                    <h3 className="fw-bold mt-5">¿Es legal usar estos productos en Colombia?</h3>
                    <p>Segun la ley 2535 de 1993 (Articulo 25) No requieren permiso para porte o para tenencia, las armas neumáticas, de gas y las armas largas de pólvora negra, incluso las escopetas de fisto.</p>
                    <h3 className="fw-bold mt-5">¿Dónde sí hay restricciones?</h3>
                    <p>En corcondancia con el Código Nacional de Policia de 2016, articulo 26, se establece que tienen restricción SOLO en espacios abiertos al publico, con aglomeraciones y/o se consuma alcohol</p>
                    <h3 className="fw-bold mt-5">¿Por cuáles bancos se puede consignar el pedido?</h3>
                    <p>Los pagos puedes ser realizados por las siguientes cuentas mobile: Bancolombia, Nequi, Daviplata. 
                    </p>
                    <h3 className="fw-bold mt-5">¿Cuándo se debe consignar el pedido?</h3>
                    <p className="mb-5">
                    Los pagos SIEMPRE deben ser consignados al momento en el que se realiza el pedido.  
                    </p>
                </div>
            </Navbarr>
            <div className="d-flex flex-column">
                <Footer/>
            </div>
        </>
    )
}