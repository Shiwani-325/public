import React, { useState } from "react";
import "./wheather.css";
import { useGetAllPostQuery } from "../services/post";
export default function Weather() {
  const [inputS, setinputS] = useState("london");
  const [buttonS, setButtonS] = useState(inputS);
  const renderinfo = useGetAllPostQuery(buttonS);
  let timeGone = renderinfo?.data?.location?.localtime?.split(" ") || 0
  const getDirection = (data) => {
    if (data === "E") return "East";
    if (data === "W") return "West";
    if (data === "S") return "South";
    if (data === "N") return "North";
    if (data === "SE") return "South East";
    else return data;
  };
  console.log(timeGone[0]);
  return (
    <>
      <div className="search">
        <input
          className="inputSearch"
          type="text"
          onChange={(e) => setinputS(e.target.value)}
        />
        <button className="buttonSearch" onClick={() => setButtonS(inputS)}>
          Search
        </button>
      </div>
      {renderinfo?.data?.length > 0 ? (
        <h1>Not Found</h1>
      ) : (
        <div className="mainLayout">
          <div className="dateAndtime">
            <span className="dateFull">{timeGone[0]}</span>
            <br />
            <span className="timeFull">{timeGone[1]}</span>
          </div>
          <div>
            <span className="tempBig">
              {renderinfo?.data?.current?.temperature}
              <sup style={{ fontWeight: "bold !important" }}>oC</sup>
            </span>
            <br />
            <span style={{ marginRight: "15px" }}>
              Max: -<sup>o</sup>
            </span>
            <span>
              Min: -<sup>o</sup>
            </span>
            <br />
            <span style={{ marginRight: "15px" }}>
              Wind: {getDirection(renderinfo?.data?.current?.wind_dir)}
            </span>
            <span>{renderinfo?.data?.current?.wind_speed} mi/h</span>
          </div>
          <div>
            <img
              src={renderinfo?.data?.current?.weather_icons[0]}
              alt="hello"
            />
            <br />
            <span className="clear">
              <em>{renderinfo?.data?.current?.weather_descriptions[0]}</em>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
