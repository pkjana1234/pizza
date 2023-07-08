export const StoreCart =(data)=>{
    return localStorage.setItem('cartItems',JSON.stringify(data))
}
export const FetchCart =()=>{
    let a = localStorage.getItem('cartItems')
    return JSON.parse(a)
}