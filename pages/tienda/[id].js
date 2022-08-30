import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CardProduct from '../../components/CardProduct';
import { getItemsData, getPathsFromsIds } from '../../lib/utils';

import style from '../../styles/tienda.module.css';

export default function ProductPage({productsInfo}){
    return (
    <>
        <Navbar>
            <div className={style.tiendaProduct}>
                <CardProduct
                    item={productsInfo}
                    showAs={'page'}
                />
            </div>
        </Navbar>
        <div className="d-flex flex-column">
            <Footer/>
        </div>
    </>
)
}

export async function getStaticPaths(){
    const paths = await getPathsFromsIds();

    return{
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps({params}){
   const id = params.id;
   const product = await getItemsData(id);

   return{
    props:{
        productsInfo: product
    },
   };
}