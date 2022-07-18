import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 100
  }
});

function ProgressBar(props) {
    const count = props.count * 25;
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Slider
          value={count}
          step={null}
        />
      </div>
    );
}

export default ProgressBar