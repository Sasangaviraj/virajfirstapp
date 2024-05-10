import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const categoryArr = [
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="categoryitem" className="rounded-full w-[50px] h-[50px]',
        title:'Category Title 1',
        categoryId:'category1',
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="categoryitem" className="rounded-full w-[50px] h-[50px]',
        title:'Category Title 2',
         categoryId:'category2',
        
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="categoryitem" className="rounded-full w-[50px] h-[50px]',
        title:'Category Title 3',
         categoryId:'category3',
        
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="categoryitem" className="rounded-full w-[50px] h-[50px]',
        title:'Category Title 4',
         categoryId:'category4',
        
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="categoryitem" className="rounded-full w-[50px] h-[50px]',
        title:'Category Title 5',
        categoryId:'category5',
        
    },
]


const Category = () => {
  return (
    <div className=" px-5 py-[100px] w-full h-screen overflow-y-scroll">
        <section style={{
            boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        }} 
         className="w-full p-2 " >
            <h1 className ='text-lg font-bold mt-2 ml-2 mb-3'>Main Categories</h1>
            <div className=" grid grid-cols-3 grid-rows-[auto] gap-5">
                {categoryArr.map(({imageUrl,title,categoryId},index)=>(
                <CategoryUnitItems key={index} imageUrl={imageUrl} title={title} categoryId={categoryId}/>
                ))}
                
            </div>
           
        </section>
    </div>
  )
}

export default Category;


const CategoryUnitItems = ({imageUrl,title,categoryId})=>
<Link to={`/category/${categoryId}`}>

<IconButton sx={{
    color:'gray',
    padding:'1px',
    borderRadius:'6px',
}}>
<div 
     style={{
        boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    }} 
  className=" m-1 w-full py-6 px-3 rounded-md flex flex-col items-center">
    <img
     src={imageUrl}
     alt={title}
     className=" rounded-full w-[50px] h-[50px]"
     />
    <h2 className="text-[10px] text-black mt-3 font-bold">{title}</h2>

</div></IconButton></Link>
