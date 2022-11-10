import React from 'react';
import "./PlaneScreen.css";

function PlanScreen() {
  return (
    <div className='plans'>

        <div className='props'>
            <div className='prop'>
                <h5>Premium</h5>
                <h6>4K + HDR</h6>
            </div>
            <div className='prop'>
                <h5>Basic</h5>
                <h6>720P</h6>
            </div>
            <div className='prop'>
                <h5>Standard</h5>
                <h6>1080P</h6>
            </div>
        </div>

        <div className='buttons'>
            <div className='button'>
                <button>Subscribe</button>
            </div>
            <div className='button'>
                <button>Subscribe</button>
            </div>
            <div className='button'>
                <button>Subscribe</button>
            </div>
        </div>
        {/* <div className='plans_props'>
            <h5>Premium</h5>
            <h6>4K + HDR</h6>
            <button>Subscribe</button>
        </div>
        <div className='plans_props'>
            <h5>Basic</h5>
            <h6>720P</h6>
            <button>Subscribe</button>
        </div>
        <div className='plans_props'>
            <h5>Standard</h5>
            <h6>1080P</h6>
            <button>Subscribe</button>
        </div> */}
    </div>
  )
}

export default PlanScreen