import React, { useState } from "react";
import { latest, recommended, upcome } from "../../dummyData";
import { Homes } from "../homes/Homes";
import { Trending } from "../trending/Trending";
import { Upcomming } from "../Upcoming/Upcomming";

export const HomePages = () => {
  const [items, setitems] = useState(upcome);
  const [item, setitem] = useState(latest);
  const [rec, setrec] = useState(recommended);

  return (
    <>
      <Homes />

      <Upcomming items={items} title="Upcomming Movies" />
      <Upcomming items={item} title="Latest Movies" />
      <Trending />
      <Upcomming items={rec} title="Recommended Movies" />
    </>
  );
};
