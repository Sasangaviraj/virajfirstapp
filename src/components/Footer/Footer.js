import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';




const Footer = () => {
  const [whoIsClick,setWhoIsCick]=useState({
    Home:true,
    Category:false,
    Profile:false,
  });
  return (
    
    <footer className="fixed bottom-0 left-0 z-[100]  w-full p-3  bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      
      <FooterIcon clickFun={{whoIsClick,setWhoIsCick}} Icon={HomeOutlinedIcon} iconText='Home'/>
      <FooterIcon clickFun={{whoIsClick,setWhoIsCick}} Icon={AppsOutlinedIcon } iconText='Category'/>
      <FooterIcon clickFun={{whoIsClick,setWhoIsCick}} Icon={AccountCircleOutlinedIcon } iconText='Profile'/>
       
    </footer> 
  );
};

export default Footer;

const FooterIcon = ({Icon,iconText,clickFun})=>{

  const clickHandle = ()=>{
  
      const obj = 
        {
          Home:true,
          Category:false,
          Profile:false,
        };

        if(iconText==="Category"){
          obj.Category=true;
          obj.Home=false;
          obj.Profile=false;
        }else if (iconText==='Profile'){
          obj.Home=false;
          obj.Category=false;
          obj.Profile=true;
        }

      clickFun.setWhoIsCick(obj);
   
  };


  return(
  <Link to={iconText==="Home"?'/': `/${String(iconText).toLowerCase()}`}>
   

  <IconButton sx={{
    padding:'4px',
    paddingTop:'0',
    borderRadius:'5px',
    color:'red',
  }}>
    <div style={{
      borderBottom :clickFun.whoIsClick[iconText] && '2px solid red' 
    }} 
   
    className='hover:text-[#f85d5d] transition-all duration-300'
     onClick={clickHandle} >
    <Icon/>
    <p className='text-xs font-semibold'>{iconText}</p>
    </div>     

  </IconButton> </Link>

)};

