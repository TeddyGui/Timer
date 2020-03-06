import React from "react";

const secondsToTime = totalSeconds => {
  const seconds = totalSeconds % 60;
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hours = Math.floor(totalSeconds / 3600);
  return { seconds, minutes, hours

  };
};
const formatTime = totalSeconds => {
  const timeObject = secondsToTime(totalSeconds);
  return (
    String(timeObject.hours).padStart(2, "0") +
    ":" +
    String(timeObject.minutes).padStart(2, "0") +
    ":" +
    String(timeObject.seconds).padStart(2, "0")
  );
};

 class Timers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      working: true
    };
  }
  startTimer = () => {
    this.setState({
      working: !this.state.working
    });
    if (this.state.working) {
      let x = setInterval(() => {
        this.setState({
          seconds: this.state.seconds + 1
        });
      }, 1000);
      
      this.setState({
        interval: x
      });
    } else this.pauseTimer();
  };
  pauseTimer = () => {
    clearInterval(this.state.interval);
  };
  resetTimer = () => {
    this.setState({
      seconds: 0
    });
    clearInterval(this.state.interval);
  };
  render() {
    return (
      <div className="Time">
        <h1>{formatTime(this.state.seconds)}</h1>
        <div className="Times">
        <p className="timee">Minutes</p>
        <p className="timee">Second</p>
        <p className="timee">Milliseconds</p>
        </div>
        <button className="start" onClick={this.startTimer}>
          Start
        </button>
        <button className="reset" onClick={this.resetTimer}>
          Reset
        </button>
      </div>
    );
  }
}

export default Timers;