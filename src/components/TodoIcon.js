import React from 'react';
import { ReactComponent as CheckSVG} from '../images/check.svg';
import { ReactComponent as DeleteSVG} from '../images/delete.svg';

const iconType = {
    'check':(color)=> <CheckSVG fill={color} />,
    'delete': (color)=>  <DeleteSVG fill={color} />
}

function TodoIcon ({type, color, onClick}){
    return (
        <span className={`element__${type}`} onClick={onClick}
        >
            {iconType[type](color)}
        </span>
    );
}

export {TodoIcon}; 