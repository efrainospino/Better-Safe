export async function getItems(){
    const request = await fetch(`https://my-bassist-chris.mybassistchris.now.sh/api/items`);
    const items = await request.json();

    return items;
}

export async function latesItems(){
    const items = await getItems();

    return items.slice(0,3);
}