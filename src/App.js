import React from 'react';
import Dropdown from './components/Dropdown';

const App=()=>{
    const dropdownItems=['Yes','Probably Not','Option1','Option2','Option3','Option4','Option5'];

    return(
        <div className="App" style={{backgroundColor:'lightblue'}}>
            <h1>My DropDown App</h1>
            <Dropdown items={dropdownItems}/>
        </div>
    );
};

export default App;