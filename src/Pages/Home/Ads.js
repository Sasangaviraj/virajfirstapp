// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const adsElement = [
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1d'
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        imageUrl:'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
]


const Ads = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className='rounded-lg overflow-hidden'
      
    >
        {adsElement.map(({imageUrl},index)=> (
        <SwiperSlide key={index}>
            <AdUnit imageUrl={imageUrl} id={index}/>
        </SwiperSlide>))}

    </Swiper>
  );
};

export default Ads;

const AdUnit = ({imageUrl,id})=>(
        <img src={imageUrl} 
        alt={`ad${id}`} 
        className='w-full object-contain rounded-lg'/>
    
)

