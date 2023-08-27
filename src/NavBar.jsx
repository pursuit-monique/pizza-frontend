// import { useState, useEffect } from 'react';

function NavBar({id}){
//     const [url, setUrl] = useState('/');
    
//     useEffect(() =>{
//         setUrl(window.location.pathname.split('/').includes('item'));
//     }, [window.location.pathname])

// console.log(window.location.pathname);
    return(
        <>
    <div className={`hotPinkBG p-8  ${ id ? 'NavBarDark' : 'NavBar '}`} >
        <a href="/"><h1 className="center">Our Menu</h1></a>
    </div>
    </>
    )
}

export default NavBar;