import { useSelector } from "react-redux"
import { categorySelector } from "../../Store/ReduxSlice/categorySlice"
import { useParams } from "react-router-dom";
import Rating from "../Category/Category";



const categoryItemArr = [
  {
      imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="categoryitem" className="rounded-full w-[50px] h-[50px]',
      title:'Category Title 1',
  },
  {
      imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="categoryitem" className="rounded-full w-[50px] h-[50px]',
      title:'Category Title 2',
      
      
  },
  {
      imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="categoryitem" className="rounded-full w-[50px] h-[50px]',
      title:'Category Title 3',
      
      
  },
  {
      imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="categoryitem" className="rounded-full w-[50px] h-[50px]',
      title:'Category Title 4',
     
      
  },
  {
      imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="categoryitem" className="rounded-full w-[50px] h-[50px]',
      title:'Category Title 5',
     
      
  },
]

const CategoryItems = () => {
  const category = useSelector(categorySelector);
  const {categoryId} =useParams;
  const categoryTitle = category.filter((ele)=>ele.id===categoryId);
  
  
 
  return (
    <div className=" px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <h1 className="ml-3 font-bold text-lg ">
        { categoryTitle[0]?.title}
        </h1>
        <div className=" w-full grid grid-col-3 grid-rows[auto] gap-4 ">
          {categoryItemArr.map(({imageUrl,title,},index)=>
         <CategoryItemUnit key={index} imageUrl={imageUrl} title={{title}} />)}
        </div>
    </div>
  );
};

export default CategoryItems;

const CategoryItemUnit = ({imageUrl,title})=>
  <div>
    <img src= {imageUrl} alt={title}  w-full object-contain/>
    <h3>{title}</h3>
    <Rating
         name={imageUrl}
         value={3.5}
         precision={0.1}
         size="small"
         readOnly
        />
            
  </div>