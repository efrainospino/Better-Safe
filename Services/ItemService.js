export async function getItems(){
    const request = await fetch(`https://better-safe.herokuapp.com/productos`);
    const items = await request.json();

    return items;
}

export async function latesItems(){
    const items = await getItems();

    return items.slice(0,3);
}