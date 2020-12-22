export function getByTitle(list, keyword){
    const search = keyword.trim().toLowerCase();
    if(!search.length) return list;
    return list.filter(produkt => produkt.name.toLowerCase().indexOf(search) > -1);
}