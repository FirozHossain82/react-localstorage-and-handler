// use local storage to manege cart data

const addToDb = (id) =>{
    const quantity = localStorage.getItem(id);
    if(quantity){
        console.log('already added');
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity)
    }
    else{
        console.log('new Item added')
        localStorage.setItem(id,1);
    }
    
}

export{addToDb};