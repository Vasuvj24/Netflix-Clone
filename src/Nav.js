import React,{useState,useEffect} from "react";
import './Nav.css'
function Nav() {
    // we wil use usestate here as when we scroll we need to change a variable we do it by usestate and then to add effect on variable change we use useeffect
    const [Show,handleShow] = useState(false);
    useEffect(() => {
        // we can use js here like window.event.addListener
        window.addEventListener('scroll',()=>{
            console.log('inside event listner')
            if(window.scrollY > 100){
                handleShow(true);
                console.log('handleShow ' + handleShow);
            }else{
                handleShow(false);
                console.log('handleShow ' + Show);
            }
        })
        console.log(handleShow);
        return () => {
            window.removeEventListener('scroll');
        }
    },[])
  return (
    <div className={`nav ${Show && 'nav-black'}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
