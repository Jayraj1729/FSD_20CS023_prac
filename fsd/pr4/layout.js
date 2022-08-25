//creating layout component which is default page and it contains link to other pages
//importing routing methods
import { render } from "react-dom";
import { Outlet, Link } from "react-router-dom";

//layout component
const Layout = () => {
  return (
    <>
	//applying style to nav bar
      <nav style={{
       backgroundColor:'black',
       padding:40, 
      }}>
	//applying inline css and links
        <span> <Link to="/" style={{fontFamily:'verdana', margin:20,textAlign:'left', textDecoration:'none',color:'white', fontWeight:'bold'}}>Home</Link></span>

        <span> <Link to="/about" style={{fontFamily:'verdana', margin:20,textAlign:'left', textDecoration:'none',color:'white',fontWeight:'bold'}}>About</Link></span>
        <span><Link to="/contactus" style={{fontFamily:'verdana', margin:20,textAlign:'left', textDecoration:'none',color:'white',fontWeight:'bold'}}>Contact US</Link></span>  
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
};

export default Layout;
