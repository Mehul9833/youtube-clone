import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./index";
import { useParams } from "react-router-dom";

import { fetchFromApi } from "../utils/fetchFromApi";

const SearchFeeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  console.log("the searcch", searchTerm);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for:{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeeed;
