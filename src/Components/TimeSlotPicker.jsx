import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const TimeSlotPicker = () => {
  return (
    <div className="my-4">
      <h3>Pick Time Slots</h3>
      <ButtonGroup>
        <Button variant="outline-primary">Monday 5pm</Button>
        <Button variant="outline-primary">Tuesday 6pm</Button>
        <Button variant="outline-primary">Wednesday 7pm</Button>
      </ButtonGroup>
    </div>
  );
};

export default TimeSlotPicker;
