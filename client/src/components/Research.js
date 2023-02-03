import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Fade } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Research() {
  const [blogData, setBlogData] = useState([]);
  const [recapData, setRecapData] = useState([]);

  const responsive = {
    superLargeDesktop: {
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
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fflipside-governance%2Ftagged%2Fflipside-governance"
      )
      .then((res) => {
        setBlogData(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fflipside-governance%2Ftagged%2Frecap"
      )
      .then((res) => {
        console.log(res.data.items);
        setRecapData(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="intro3">
        <div className="typewriter2">
          <p className="type2">
            We are committed to ushering in the next frontier of decentralized
            organizations. We're crypto-native, we're passionate about what we
            do, and we hail from a diverse set of backgrounds. By leveraging our
            experience in DeFi, political science, traditional finance, and data
            engineering, we are uniquely positioned to help DAOs scale. We
            publish in-depth research on a weekly basis.
          </p>
        </div>
        <Fade in={true} timeout={4000} style={{ transitionDelay: "300ms" }}>
          <div className="values">
            <h1>LATEST RESEARCH</h1>
            <div className="research-cards">
              <div style={{ position: "relative" }}>
                <Carousel
                  responsive={responsive}
                  focusOnSelect={true}
                  infinite={true}
                  autoPlay={true}
                  renderButtonGroupOutside={true}
                  // arrows={false}
                  className="carooo"
                >
                  {blogData.map((post, index) => (
                    <Card
                      sx={{ width: 350, borderRadius: 3 }}
                      className="dbcard"
                    >
                      <CardActionArea
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CardMedia
                          component="img"
                          height="150"
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
                            sx={{ fontFamily: "inherit", minHeight: 80 }}
                          >
                            {post.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            // color="text.secondary"
                            sx={{ fontFamily: "inherit" }}
                          >
                            Author: {post.author}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </Carousel>
              </div>
            </div>
            <h1>WEEKLY ACTIVITY</h1>
            <div className="research-cards">
              <div style={{ position: "relative" }}>
                <Carousel
                  responsive={responsive}
                  focusOnSelect={true}
                  infinite={true}
                  autoPlay={true}
                  renderButtonGroupOutside={true}
                  // arrows={false}
                  className="carooo"
                >
                  {recapData.map((post, index) => (
                    <Card
                      sx={{ width: 350, borderRadius: 3 }}
                      className="dbcard"
                    >
                      <CardActionArea
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CardMedia
                          component="img"
                          height="150"
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
                            sx={{ fontFamily: "inherit", minHeight: 80 }}
                          >
                            {post.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            // color="text.secondary"
                            sx={{ fontFamily: "inherit" }}
                          >
                            Author: {post.author}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Research;
