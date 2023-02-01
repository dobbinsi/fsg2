import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Snackbar } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ScrollButton from "./ScrollButton";

function Research() {
  const [blogData, setBlogData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleCopy = () => {
    setOpen(true);
    navigator.clipboard.writeText(blogData.link);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fflipside-governance"
      )
      .then((res) => {
        console.log(res.data.items);
        setBlogData(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
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
              delay: 50,
              wrapperClassName: "type2",
              cursorClassName: "type-cursor2",
            }}
          />
        </div>
        <div className="values">
          <h1>Latest Research</h1>
          <div className="value-cards">
            <div style={{ position: "relative", marginLeft: 55 }}>
              <Carousel
                responsive={responsive}
                focusOnSelect={true}
                infinite={true}
                autoPlay={true}
                arrows={false}
              >
                {blogData.map((post, index) => (
                  <Card sx={{ width: 400, borderRadius: 3 }} className="dbcard">
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={post.thumbnail}
                        alt="thumbnail"
                      />
                      <CardContent
                        sx={{
                          backgroundColor: "#171b20",
                          color: "#fff",
                          //   minHeight: 100,
                        }}
                      >
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{ fontFamily: "Courier New", minHeight: 120 }}
                        >
                          {post.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          // color="text.secondary"
                          sx={{ fontFamily: "Courier New" }}
                        >
                          Author: {post.author}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        backgroundColor: "#171b20",
                        color: "#fff",
                      }}
                    >
                      <Button
                        size="small"
                        color="primary"
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ fontFamily: "Courier New" }}
                      >
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Research;
