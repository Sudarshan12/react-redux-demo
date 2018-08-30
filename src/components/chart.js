import React from "react";
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from "react-sparklines";

export default function chart(props) {
  return (
      <Sparklines data={props.data} height={120}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type = "mean"/>
      </Sparklines>
  );
}
