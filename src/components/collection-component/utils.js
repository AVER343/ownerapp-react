export const GetTen=(array,page)=>{
    return array.filter((Element,index)=>index>(page-1)*10 && index<=page*10 ?Element:null)
}
