import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const AgeSelection = ({count,ChangeForm}) => {
  return (
   <>
   { count ===1 &&
    <div className={`container `} style={{background:"#eaeaea",maxHeight:600}}>
    <div className="row align-items-center justify-content-center">
        <div className="col-md-12">
            <div className="perent-bg">
                <div className="top-heading">
                    <h1>Whats Your Age ?</h1> 
                </div>
                <div className="radio-title-group top-input">
                    <div className="input-container">
                        <input id="walk" type="radio" name="1" onChange={()=>ChangeForm(2)}/>
                        <div  className="radio-title">
                            <div className="d-flex input-image-main h-[50px] align-items-center gap-2">
                                <div className="input-text">
                                    <h1>7-10</h1>
                                </div>

                            </div>
                            <label for="walk"></label>
                        </div>
                    </div>
                    <div className="input-container">
                        <input id="walk" type="radio" name="1"/>
                        <lable  htmlFor="walk" className="radio-title">
                            <div className="d-flex input-image-main h-[50px] align-items-center gap-2">
                                <div className="input-text">
                                    <h1>11-15</h1>
                                </div>
                            </div>
                        </lable>
                    </div>
                    <div className="input-container">
                        <input id="walk" type="radio" name="1"/>
                        <div className="radio-title">
                            <div className="d-flex input-image-main h-[50px] align-items-center gap-2">
                                <div className="input-text">
                                    <h1>ABOVE 16</h1>
                                </div>

                            </div>
                            <label for="walk"></label>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    </div>}
   </>
    
  );
};

export default AgeSelection;
