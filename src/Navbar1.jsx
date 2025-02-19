import { useState } from "react";
import Main_image from "./Main_image";
import About from "./About";

const Navbar1 = () => {

    const [showmenu,setshowmenu] = useState('');

    function shownav(){
        const showmenu1 =  (showmenu == 'showmenu')?'none':'showmenu';
        setshowmenu(showmenu1);
    }
  return (
    <>
      <div className="navbar">
        <nav>
          <div className="logo">
            <a href>Karuppatti Bench</a>
          </div>
          <ul className={showmenu}>
            <li><a href="#">Home </a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Why Karuppati</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Client</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <div className="menu" onClick={shownav}>
            <div className="menu-bar" />
            <div className="menu-bar" />
            <div className="menu-bar" />
          </div>
        </nav>
      </div>
      {/* <Main_image /> */}
      {/* <About /> */}
    </>
  );
};

export default Navbar1;
