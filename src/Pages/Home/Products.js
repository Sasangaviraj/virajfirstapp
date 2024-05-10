


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Grid, Mousewheel, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './Style.css';
import { IconButton, Rating } from '@mui/material';







const productArray = [
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:'100',
        productTitle:'Product Titiles 1',
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:'100',
        productTitle:'Product Titiles 2',
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:'100',
        productTitle:'Product Titiles 3',
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:'100',
        productTitle:'Product Titiles 4',
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:'100',
        productTitle:'Product Titiles 5',
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:'100',
        productTitle:'Product Titiles 6',
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:'100',
        productTitle:'Product Titiles 7',
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        price:'100',
        productTitle:'Product Titiles 8',
    },
]

const Products = ({title, }) => {
  return (
    <section 
    style={{
        boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    }}  
    
        className=' w-full mt-6 p-2'>
        <h1 className ='text-lg font-bold mt-2 ml-2 mb-3'>{title}</h1>
        <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}

        mousewheel={true}
        modules={[Grid, Pagination,Mousewheel]}
        
      >
        {productArray.map(({imageUrl,price,productTitle},index)=>
        <SwiperSlide key={index}>
            <ProductUnit 
                imageUrl={imageUrl} 
                price={price} 
                productTitle={productTitle} 
                id={index} 
                />
        </SwiperSlide>
        )}
       
        </Swiper>
      
    </section>
  );
};

export default Products

const ProductUnit = ({imageUrl,price,productTitle,id})=>
<IconButton 
        sx={{
            padding:'4px',
            borderRadius:'5px',
            color:'rose',
            margin:'3px',
            marginBottom:'30px',
        }}
        >
      
    <div className="w-full ">
        
            <img src={imageUrl} alt={`prodcut_unit_${id}`} ClassNames="w-full object-contain " />
            <h3 className='text-sm font-semibold text-stone-900'>{productTitle}</h3>
            <Rating
                name={imageUrl}
                value={3.5}
                precision={0.1}
                size="small"
                readOnly
            
            />
            <h3 className='text-stone-900 font-bold text-lg'>Rs.{price}/-</h3>
    
        
    </div>
</IconButton>
