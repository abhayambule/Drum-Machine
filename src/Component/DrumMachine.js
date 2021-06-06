import React from "react";
import Button from "./Button";
const sounds = [
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
];

const DrumMachine = () => {
  return (
    <div className="machine">
      <div className="machine_left">
        <div className="col_1">
          <Button name="Q" sound={sounds[0]} />
          <Button name="A" sound={sounds[1]} />
          <Button name="Z" sound={sounds[2]} />
        </div>
        <div className="col_2">
          <Button name="W" sound={sounds[3]} />
          <Button name="S" sound={sounds[4]} />
          <Button name="X" sound={sounds[5]} />
        </div>
        <div className="col_3">
          <Button name="E" sound={sounds[6]} />
          <Button name="D" sound={sounds[7]} />
          <Button name="C" sound={sounds[8]} />
        </div>
      </div>
      <div className="machine_right"></div>
    </div>
  );
};

export default DrumMachine;
