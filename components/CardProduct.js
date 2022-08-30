import Card from 'react-bootstrap/Card';
import Image from'next/image'
import Link from 'next/link'
import {convertToPath} from '../lib/utils'
import AddButton from './AddButton';

import style from '../styles/Card.module.css';

import { useAppContext } from './StateWrapper';

export default function CardProduct({showAs, item, qty}){

    const Car = useAppContext();

    function handleDelete(){
        Car.deleteItemToCar(item);
    }

    if(showAs === 'page'){
        return( 
            <>
                <div className={`container py-4 my-5 mx-auto bg-white shadow-lg ${style.container}`}>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 text-center">
                        <Image className="my-3" src={item.image} alt={item.title} width={320} height={320}/>
                        </div>
                        <div className="col-12 col-md-6 px-4">
                            <h4 className="fw-bold">{item.title}</h4>
                            <p>{`$${item.price.toLocaleString("es-ES")}`}</p>
                            <p>{item.description}</p>
                            <AddButton item={item}/>
                        </div>
                    </div>
                </div>
            </>
        )
    };

    if(showAs === 'listItem'){
        return (
            <>
                <div className={`ms-2 mt-4 d-flex justify-content-between align-items-center ${style.listContainer}`}>
                    <Image alt={`${item.title}`} src={`${item.image}`} className='card-img-top' width={53} height={53} priority/>
                    <div className={`me-auto ms-3`}>
                        <h5 className={`fw-bold mb-1 ${style.listTitle}`}>{item.title}</h5>
                        <p className={`mt-0 mb-0 ${style.listText}`}>{`$${item.price.toLocaleString("es-ES")}`}</p>
                        { qty === 0 ? "" : <p className={`mt-0 mb-0 ${style.listText}`}>{qty} units</p>}
                        { qty === 0 ? "" : <p className={`mt-0 mb-0 ${style.listText}`}>Subtotal: {`$${(qty * item.price).toLocaleString("es-ES")}`}</p>}
                        <i className={`bi bi-trash3-fill text-danger me-1 ${style.listIcon}`} onClick={handleDelete}></i>
                    </div>
                </div>
                <hr className="text-black"/>
            </>
        )
    }
    
    return(
        <>
            <Card style={{ width: '14rem' }} className={`col px-0 ${style.card}`}>
                <Link href={`/tienda/${convertToPath(item.title)}`}>
                    <a className={style.ancla}>
                        <Image alt={`${item.title}`} src={`${item.image}`} className={`card-img-top`} width={250} height={230} priority/>
                    </a>
                </Link>
                <Card.Body>
                    <Link href={`/tienda/${convertToPath(item.title)}`}>
                        <a className={style.ancla}>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                            {`$${item.price.toLocaleString("es-ES")}`}
                            </Card.Text>
                        </a>
                    </Link>
                    <AddButton item={item}/>
                </Card.Body>
            </Card>
        </>
    )
}