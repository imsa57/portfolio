import React from 'react';


const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            { ['home', 'about', 'work', 'skills', 'contact'].map((item , index) =>(
            <a
                href={`#${item}`}
                key={item + index}
                className='app__navigation-dot'
                aria-label={`Go to ${item} section`}
                style={active === item ? { backgroundColor: '#313BAC' } : { }}
            >
                <span style={{ display: 'none' }}>{item}</span>
            </a>
            ))}
        </div>
    )
}
 
export default NavigationDots
