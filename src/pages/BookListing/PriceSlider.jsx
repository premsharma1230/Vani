import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}
function calculateValue(value) {
  return 2 ** value;
}

const minDistance = 10;

export const PriceSlider = props => {
  const [value1, setValue1] = useState([100, 2000]);
  const [count, setCout] = useState([0, 200]);

  // const marks = [
  //   {
  //     value: 0,
  //     label: "100",
  //   },
  //   {
  //     value: 100,
  //     label: "2000",
  //   },
  // ];

  const handleChange1 = (event, newValue, activeThumb) => {
    props.getPriceValue(newValue);
    if (!Array.isArray(newValue)) {
      return;
    }
    if (typeof newValue === "number") {
      setValue1(newValue);
      setCout(newValue);
    }
    if (activeThumb === 0) {
      setCout([Math.min(newValue[0], count[1] - minDistance), count[1]]);
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setCout([count[0], Math.max(newValue[1], count[0] + minDistance)]);
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
    // console.log(count, "setValue1+++++++++++++++");
  };

  return (
    <Box sx={{ width: 170 }}>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        min={0}
        max={5000}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        // marks={marks}
      />
    </Box>
  );
};
