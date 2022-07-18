import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

const option = [
  {
    value: 0,
    label: "Strongly Disagree"
  },
  {
    value: 25,
    label: "Disagree"
  },
  {
    value: 50,
    label: "Neutral"
  },
  {
    value: 75,
    label: "Agree"
  },
  {
    value: 100,
    label: "Strongly Agree"
  }
];


function DiscreteSlider(props) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
      props.onChange(newValue, 1);
    };

    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Slider
          step={25}
          marks={option}
          onChange={handleChange}
        />
      </div>
    );
}

export default DiscreteSlider