export const ManipulateItems=(item,array)=>{
    const len =array.length
    let newArray=[]
    let i=0;
    if(item.quantity<0)
    {   
        item.quantity=0
    }
    for(i=0;i<len;i++)
    {
       if(array[i].id===item.id)
       {
           array[i]=item
       }
       newArray.push(array[i])
    }
    return newArray
}
export const Remove_Item =(item,array)=>{
    return array.filter(Element =>Element.id !== item.id?Element:null)
}
export const incrementQuantity=(item,array)=>{
    if(item.quantity<0)
    {   
        item.quantity=0
    }
    return array.map(Element =>
        Element.id === item.id
          ? { ...Element, quantity: Element.quantity + 1 }
          : Element);
}
export const DecrementQuantity=(item,array)=>{
    if(item.quantity<0)
    {   
        item.quantity=0
    }
    return array.map(Element =>
        Element.id === item.id
          ? { ...Element, quantity: Element.quantity - 1 }
          : Element);
}
export const deleteUser=(array,user)=>{
    let newArray=[],i
    let len =array.length
    for(i=0;i<len;i++)
    {
        if(array[i].id!=user.id)
        {
            newArray.push(copy(array[i]))
        }
    }
    return newArray
}
function copy(mainObj) {
    let objCopy = {}; // objCopy will store a copy of the mainObj
    let key;
  
    for (key in mainObj) {
      objCopy[key] = mainObj[key]; // copies each property to the objCopy object
    }
    return objCopy;
  }