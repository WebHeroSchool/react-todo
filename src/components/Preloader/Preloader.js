import React from 'react';
import './Preloader.css';

class Preloader extends React.Component {
    render() {
        return (
            <div className='preloader_wrap'>
                <div id='floatingCirclesG'>
                    <div className='f_circleG' id='frotateG_01'/>
                    <div className='f_circleG' id='frotateG_02'/>
                    <div className='f_circleG' id='frotateG_03'/>
                    <div className='f_circleG' id='frotateG_04'/>
                    <div className='f_circleG' id='frotateG_05'/>
                    <div className='f_circleG' id='frotateG_06'/>
                    <div className='f_circleG' id='frotateG_07'/>
                    <div className='f_circleG' id='frotateG_08'/>
                </div>
            </div>
        )
    }
}

export default Preloader;