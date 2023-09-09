import React from "react";
import Card from "./Cards";
import Arr from "./Data";

// const favSeries = 'netflix';
const favSeries = "amazon";
const FavS = () => {
  if (favSeries === "netflix") {
    return (
      <Card
        key={Arr[1].id}
        imgsrc={Arr[1].imgsrc}
        title={Arr[1].title}
        sname={Arr[1].sname}
        link={Arr[1].link}
      />
    );
  } else {
    return (
      <Card
        key={Arr[3].id}
        imgsrc={Arr[3].imgsrc}
        title={Arr[3].title}
        sname={Arr[3].sname}
        link={Arr[3].link}
      />
    );
  }
};

const App = () => (
  <>
    <h1 className="heading">Top 5 Netflix Web Series</h1>
    {/* <FavS /> */}
    {Arr.map((value) => {
      return (
        <Card
          key={value.id}
          imgsrc={value.imgsrc}
          title={value.title}
          sname={value.sname}
          link={value.link}
        />
      );
    })}
    ;
  </>
);
export default App;
