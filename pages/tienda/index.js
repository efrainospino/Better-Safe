import Navbarr from "../../components/Navbar";
import CardProduct from "../../components/CardProduct";
import Footer from "../../components/Footer";

import { getItems } from "../../Services/ItemService";

import style from '../../styles/tienda.module.css'

export default function Productos({items}){
    return(
        <>
            <Navbarr title={'Tienda'}>
                <div className={style.tienda}>
                    <h4 className="ps-5 ms-4 mt-4 fw-bold">Tienda</h4>
                    <div className="row gap-2 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-2 mb-5 mx-auto px-5 justify-content-center">
                        {items && items.map((item)=>(
                        <CardProduct 
                        key={item.id}
                        item={item}
                        showAs={'default'}
                        />
                        ))}
                    </div>
                </div>
            </Navbarr>
            <div className="d-flex flex-column">
                <Footer/>
            </div>
        </>
    )
}

export async function getStaticProps(){
    const res = await getItems();

    return{
        props:{
            items: res
        },
    };
}