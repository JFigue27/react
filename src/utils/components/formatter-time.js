import React from "react";

function FormatterTime(secs) {
  const minutes = parseInt(secs / 60, 10);
  const seconds = parseInt(secs % 60, 10);
  return;
  <div>
    `${minutes}` : `${seconds}`;
  </div>;
}
export default FormatterTime;
