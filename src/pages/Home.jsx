import React, { useState } from "react";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import ListView from "./ListView";
import CardView from "./CardView";

const Home = () => {
  const [viewType, setViewType] = useState("list");
  return (
    <>
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar setViewType={setViewType} />
        <Box>{viewType === "list" ? <ListView /> : <CardView />}</Box>
      </Box>
    </>
  );
};

export default Home;
