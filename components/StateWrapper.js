import { createContext, useState, useContext } from "react"

const AppContext = createContext({
    isOpen: false,
    items: [],
    handleBarCar:() => {},
    addItemToCar:(item) => {},
    deleteItemToCar:(item) => {},
    getNumberOfItems: () => {},
    totalPrice: () => {},
    handleSend: () => {},
});

export default function StateWrapper({children}){

    const [isOpen, setIsOpen] = useState(false);

    const [items, setItems] = useState([]);

    function handleBarCar(){
        setIsOpen(!isOpen);
    };

    function handleAddItemToCar(item){
        const temp = [...items];

        const found = temp.find(product => product.id === item.id);

        if(found){
            found.qty++;
        }else{
            item.qty= 1;
            temp.push(item);
        }

        setItems([...temp]);
    };

    function handleDeleteItemToCar(item){
        const temp = [...items];

        if(item.qty > 1){
            item.qty--;
            setItems([...temp]);
        }else{
            item.qty= 0;
            const newTemp = temp.filter((product)=>product.id !== item.id);
            setItems([...newTemp]);
        }

    }

    function handleNumberOfItems(){
        const total= items.reduce((acc, item)=> acc + item.qty, 0);

        return total;
    };

    function handleTotalPrice(){
        const total= items.reduce((acc, item)=> acc + (item.price * item.qty), 0);

        return total;
    };

    function handleSend(){
    
        const temp = [...items];

        let newTemp = temp.map( product => { 
            return { Nombre: product.title , Precio: product.price, Unidades: product.qty + "%0A" }; 
        });

        for (let product = 0; product < newTemp.length; product++) {
            delete newTemp[product].id;
            delete newTemp[product].image;
            delete newTemp[product].description;
        };

        let url = "https://api.whatsapp.com/send?phone=573245624645&text=*_Better_Safe_*%0A*Pedido:*%0A" + JSON.stringify(newTemp, null, 2).replace(/["{ }]/g, "").replace(/[,]/g, "%0A").replace('[', '').replace(']', '') + "%0A*Total:*%0A" + `$${handleTotalPrice().toLocaleString("es-ES")}`;

        window.open(url);
    };


    return(
        <AppContext.Provider value={{
            isOpen,
            items,
            handleBarCar,
            addItemToCar: handleAddItemToCar,
            getNumberOfItems: handleNumberOfItems,
            deleteItemToCar: handleDeleteItemToCar,
            totalPrice: handleTotalPrice,
            handleSend: handleSend,
        }}>
        {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}