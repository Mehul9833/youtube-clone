import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        margin: "auto",
        marginTop: marginTop,
        height: "326px"
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            color: "#fff"
          }}
        >
          <CardMedia
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: "2px",
              border: "1px solid #e3e3e3"
            }}
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
          ></CardMedia>
          <Typography varient="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
          </Typography>

          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Sunscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
