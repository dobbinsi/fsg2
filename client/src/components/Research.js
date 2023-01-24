import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Snackbar } from "@mui/material";

function Research() {
  const [blogData, setBlogData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleCopy = () => {
    setOpen(true);
    navigator.clipboard.writeText(blogData.link);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fflipside-governance"
      )
      .then((res) => {
        console.log(res.data.items);
        console.log(res.data.items[0]);
        setBlogData(res.data.items[2]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="intro">
      <div className="typewriter2">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "We are committed to building and ushering in the next frontier of decentralized organizations. We're crypto-native, we're passionate about what we do, and we hail from a diverse set of backgrounds. By leveraging our experience in DeFi, political science, traditional finance, research and data engineering, we are uniquely positioned to help DAOs scale. We publish in-depth research and analysis on a weekly basis."
              )
              .start();
          }}
          options={{
            wrapperClassName: "type2",
            cursorClassName: "type-cursor2",
          }}
        />
      </div>
      <div className="values">
        <h1>From our Blog</h1>
        <div className="value-cards">
          <div>
            <Card sx={{ width: 350, borderRadius: 3 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={blogData.thumbnail}
                  alt="thumbnail"
                />
                <CardContent sx={{ backgroundColor: "#171b20", color: "#fff" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontFamily: "Courier New" }}
                  >
                    {blogData.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="text.secondary"
                    sx={{ fontFamily: "Courier New" }}
                  >
                    Author: {blogData.author}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#171b20",
                  color: "#fff",
                }}
              >
                <Button
                  size="small"
                  color="primary"
                  href={blogData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontFamily: "Courier New" }}
                >
                  Read More
                </Button>
                <Button
                  size="small"
                  color="primary"
                  sx={{ fontFamily: "Courier New" }}
                  onClick={() => handleCopy(blogData.link)}
                >
                  Share
                </Button>
                <Snackbar
                  open={open}
                  onClose={() => setOpen(false)}
                  autoHideDuration={2000}
                  message="Copied to Clipboard"
                />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
