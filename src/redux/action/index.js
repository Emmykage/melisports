export const ADDITEM = 'products/ADDITEM'
export const DELITEM = 'products/DELITEM'
export const addCart = (product) => {
    return{
        type: ADDITEM,
        payload: product
    }
}

export const delCart = (product) => {
    return{
        type: DELITEM,
        payload: product
    }
}