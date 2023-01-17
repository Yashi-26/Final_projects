import React, { useRef } from 'react';
import CartCountbutton from '../../components/common/CartCountbutton';
import Menu from '../../components/common/Menu';
import Footer from '../../components/common/Footer';
import Banner from '../../components/Home/Banner';
import { menuItemsData } from '../../components/common/Menu/data';

const Home = () => {
  const menuRef = useRef();
  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
        <Banner handleScrollMenu={handleScrollMenu}/>
        <Menu list={menuItemsData} ref={menuRef}/>
        <Footer />
        <CartCountbutton/>
        {/* banner,menu,footer,cart button component */}
    </div>
  )
}

export default Home;