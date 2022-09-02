export async function getItems(){
    const request = await fetch(`http://localhost:4001/productos`);
    const items = await request.json();

    return items;
}

export async function latesItems(){
    const items = await getItems();

    return items.slice(0,3);
}