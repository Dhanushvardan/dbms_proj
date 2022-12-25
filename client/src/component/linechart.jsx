import React, { Component } from "react";
import Plot from "react-plotly.js";

class LineChart extends Component {
  render() {
    const g = this.props.data;
    const listItems = g.map((gs) => gs[1]);
    // console.log(listItems);
    return (
      <div>
        {/* <div>{listItems}</div> */}
        <Plot
          data={[
            {
              y: listItems,
              type: "scatter",
            },
          ]}
          layout={{ width: 800, height: 400, title: "visualization" }}
        />
      </div>
    );
  }
}

export default LineChart;
