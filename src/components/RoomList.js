import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import ShimmerRoomList from "./ShimmerRoomList";

const RoomList = () => {
  const [rooms, setRooms] = useState([]);

  const url =
    "https://airbnb13.p.rapidapi.com/search-location?location=India&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3f886ac492msh8b1931e94698187p1fdcc7jsnc7705105ada2",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  useEffect(async () => {
    try {
      const data = await fetch(url, options);
      const json = await data.json();
      console.log(json.results[0]);
      setRooms(json.results);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (rooms.length === 0) ? (
    <ShimmerRoomList />
  ) : (
    <>
      <div className="mx-4 mt-4 flex justify-between flex-wrap">
        {rooms.map((room) => (
          <RoomCard {...room} key={room.id} />
        ))}
      </div>
    </>
  );
};

export default RoomList;
