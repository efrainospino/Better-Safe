import { getItems } from "../Services/ItemService";

export async function getPathsFromsIds(){
    const items = await getItems();

    const ids = items.map(item => {
        return{
            params:{
                id: convertToPath(item.title),
            },
        };
    });

    return ids;
}

export async function getItemsData(id){
    const items = await getItems();

    const product = items.find(item => convertToPath(item.title) === id);

    return product;
}

export function convertToPath(title){
    return title.toLowerCase().replace(/\s/g, "-");
}