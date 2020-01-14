import React from 'react';

import Header from '../components/Header_Footer/Header'

const Layout= (props)=>{
    return(
        <div>
         <Header/>
         {props.children}
         Footer
        </div>

    )
}
export default Layout;