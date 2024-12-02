import React, { useState } from 'react';
import GetLocations from './GetLocations'
import AgeSelection from './AgeSelection'
import GarageFinder from './GarageFinder'
import Appointment from './Appointment'
function FormComp({ modaleClose }) {
  const [count, setCount] = useState(1);

  const ChangeForm = (id) => {
    if (id) {
      setCount(id);
    }
  };

  return (
    <>
      {count === 1 && <AgeSelection count={count} ChangeForm={ChangeForm} />}
      {count === 2 && <GarageFinder count={count} ChangeForm={ChangeForm} />}
      {count === 3 && <GetLocations count={count} ChangeForm={ChangeForm} />}
      {count === 4 && <Appointment count={count} ChangeForm={ChangeForm}/>}
    </>
  );
}

export default FormComp;
