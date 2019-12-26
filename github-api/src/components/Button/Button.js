import React from 'react'
import  iconBusca from '../../assets/icons/search-icon.png'

import './Button.css'

function Button(props){
    return(
        <button className='button-search' onClick={props.click}><img className='button-search-icone' src={iconBusca}/>
        </button>
    )
}
export default Button