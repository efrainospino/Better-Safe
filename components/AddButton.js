import Button from 'react-bootstrap/Button';
import style from '../styles/AddButton.module.css';

import { useAppContext } from './StateWrapper';

export default function AddButton({item}){

    const Car = useAppContext();

    function handleClick(){
        Car.addItemToCar(item);
    }


    return(
        <Button className={`shadow-none mt-2 btn-sm ${style.button}`} onClick={handleClick}>
            Agregar al Carrito
        </Button>
    )
}