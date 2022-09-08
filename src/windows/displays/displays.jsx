import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

var c = [];

function Dislpays() {

  const [isLoading, setLoading] = useState(true);

  window.captureApi.getSourceData((event, data) => {
    for (const source of data) {
      c.push(
        <div>
          <h4>{source.name}</h4>
          <img src={source.thumbnail} />
          <button onClick={() => window.captureApi.sendSelectedSource(source.id)}>
            {source.name}
          </button>
        </div>
      );

      console.log(source)
    }
    setLoading(false)
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{c}</div>;
}

root.render(<Dislpays />);
