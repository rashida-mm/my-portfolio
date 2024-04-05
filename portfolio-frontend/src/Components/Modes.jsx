import React, { useEffect, useState } from 'react'
import './Mode.css';
import { MDBSwitch } from 'mdb-react-ui-kit';


function Modes() {
    const [theme, setTheme] = useState('light');
    //theme variable tracks the current theme of the app, which the code sets to 'light' by default.
    
    //add a toggle button to switch
    const toggleTheme = ()=>{
      if(theme === 'light'){
        setTheme('dark')
      }
      else{
        setTheme('light')
      }
    }
  
    useEffect(() => {
        localStorage.setItem('theme', theme);
      document.body.className = theme;
    }, [theme]);
  
    //useEffect hook to update the className of the document.body element
    //based on the theme state variable. This allows to dynamically update
    //the CSS of the application based on the theme.
    
    const switchStyles = {
      backgroundColor: theme === 'dark' ? '#D017B8' : '#B1B1B1',
    };

    return (
      <div className={`${theme}`}  style={{ display: 'flex'}}>
        <i class="fa-regular fa-sun  pe-2 my-1"></i>
         <MDBSwitch style={switchStyles} onClick={toggleTheme}  id='flexSwitchCheckChecked'/>
         <i class="fa-regular fa-moon my-1 ps-1"></i>
        </div>
    );
  }

export default Modes