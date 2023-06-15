import React, {useState} from  'react';

const Dropdown=({items})=>{
    const [isOpen, setIsOpen]=useState(false);

    const toggleDropdown=()=>{
        setIsOpen(!isOpen);
    };

    const handleItemSelected=(item)=>{
        console.log('Selected Item', item);
        setIsOpen(false);
    };

    return(
        <div className="dropdown" style={{backgroundColor:'skyblue'}}>
           <button className="btn btn-success" onMouseDown={toggleDropdown}>Open DropDown</button>
            {isOpen && (
                <ul className='dropdown-list'>
                    {items.map((item,index)=>(
                        <li key={index} onClick={()=>handleItemSelected(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;