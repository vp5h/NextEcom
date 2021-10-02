import React from 'react';
import Link from 'next/dist/client/link';
const Footer = () => {
  return (
      <div className="container center " style={{margin: "auto"}}>

    <footer className=" text-center text-lg-start fixed-bottom">
   
    <div className="text-center" >
     Made with ❤️ by 
      <Link href="https://vp5h.netlify.app/"><a className="text-dark"> Pravesh</a></Link>
    </div>
   
  </footer>
      </div>
  );
};

export default Footer;
