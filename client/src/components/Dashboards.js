import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Fade, Slide } from "@mui/material";

import optoken from "../logos/optoken.png";
import mnde from "../logos/marinade.png";
import snap from "../logos/snapshot.svg";
import osmo from "../logos/osmo.png";

function Dashboards() {
  const styles = {
    media: {
      height: 90,
      width: 90,
      //   borderRadius: 10,
    },
    media1: {
      height: 90,
      width: 125,
      borderRadius: 2,
    },
    media2: {
      boxShadow: "0px 0px 8px 0px #fff",
      "&:hover": { boxShadow: "0px 0px 20px 0px #fff" },
    },
  };

  return (
    <div className="intro">
      {/* <Slide direction="up" in={true} mountOnEnter style={{ transitionDelay: "100ms" }}> */}
      <div>
        <h1 className="bigletters">05: TOOLS & DASHBOARDS</h1>
        <div className="typewriter2" id="tooly">
          <p className="type2">
            We build tools and dashboards to help users gain a better
            understanding of protocol governance and monitor trends in voting
            activity.
          </p>
        </div>
      </div>
      {/* </Slide> */}
      {/* <Fade in={true} timeout={4000} style={{ transitionDelay: "100ms" }}> */}
      <div className="values77">
        <div className="dashb">
          <div className="dbleft">
            <Card
              sx={{
                maxWidth: 600,
                minHeight: 180,
                borderRadius: 3,
                marginBottom: 6,
                backgroundColor: "#171b20",
              }}
              className="dbcard"
            >
              <CardActionArea
                href={"https://op-governance.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  backgroundColor: "#171b20",
                  padding: 1,
                }}
              >
                <CardMedia
                  component="img"
                  height="100"
                  image={optoken}
                  style={styles.media}
                  sx={{
                    backgroundColor: "#171b20",
                  }}
                  alt="thumbnail"
                />
                <CardContent
                  sx={{
                    backgroundColor: "#171b20",
                    color: "#f5f5f5",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontFamily: "inherit" }}
                  >
                    Optimism Governance Dashboard
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="text.secondary"
                    sx={{ fontFamily: "inherit" }}
                  >
                    Built with Flipside Crypto's ShroomDK. This dashboard was
                    designed to track governance activity and OP tokens
                    delegated on the Optimism network (Ethereum L2).
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{
                maxWidth: 600,
                minHeight: 180,
                borderRadius: 3,
                marginBottom: 6,
                backgroundColor: "#171b20",
              }}
              className="dbcard"
            >
              <CardActionArea
                href={"https://flipsidegov-snapshot.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  backgroundColor: "#171b20",
                  padding: 1,
                }}
              >
                <CardMedia
                  component="img"
                  height="100"
                  image={snap}
                  style={styles.media}
                  sx={{
                    backgroundColor: "#171b20",
                  }}
                  alt="thumbnail"
                />
                <CardContent
                  sx={{
                    backgroundColor: "#171b20",
                    color: "#f5f5f5",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontFamily: "inherit" }}
                  >
                    Snapshot Analytics
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="text.secondary"
                    sx={{ fontFamily: "inherit" }}
                  >
                    Built with Flipside Crypto's ShroomDK. This dashboard was
                    designed to track governance activity across Snapshot spaces
                    with charts to monitor trends in usage and leaderboards to
                    identify the most active communities & contributors.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className="dbright">
            <Card
              sx={{
                maxWidth: 600,
                minHeight: 180,
                borderRadius: 3,
                marginBottom: 6,
                backgroundColor: "#171b20",
              }}
              className="dbcard"
            >
              <CardActionArea
                href={"https://flipsidegov-mnde.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  backgroundColor: "#171b20",
                  padding: 1,
                }}
              >
                <CardMedia
                  component="img"
                  height="800"
                  image={mnde}
                  style={styles.media1}
                  sx={{
                    backgroundColor: "#171b20",
                  }}
                  alt="thumbnail"
                />
                <CardContent
                  sx={{
                    backgroundColor: "#171b20",
                    color: "#f5f5f5",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontFamily: "inherit" }}
                  >
                    Marinade Governance Dashboard
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="text.secondary"
                    sx={{ fontFamily: "inherit" }}
                  >
                    This dashboard was built to help the Marinade community gain
                    a better understanding of protocol governance and the MNDE
                    token.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{
                maxWidth: 600,
                minHeight: 180,
                borderRadius: 3,
                marginBottom: 6,
                backgroundColor: "#171b20",
              }}
              className="dbcard"
            >
              <CardActionArea
                href={"/"}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  backgroundColor: "#171b20",
                  padding: 1,
                }}
              >
                <CardMedia
                  component="img"
                  height="100"
                  image={osmo}
                  style={styles.media}
                  sx={{
                    backgroundColor: "#171b20",
                  }}
                  alt="thumbnail"
                />
                <CardContent
                  sx={{
                    backgroundColor: "#171b20",
                    color: "#f5f5f5",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontFamily: "inherit" }}
                  >
                    New Dashboard Coming Soon(TM)
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="text.secondary"
                    sx={{ fontFamily: "inherit" }}
                  >
                    Built with Flipside Crypto's ShroomDK. This dashboard was
                    designed to track governance activity across Snapshot spaces
                    with charts to monitor trends in usage and leaderboards to
                    identify the most active communities & contributors.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default Dashboards;
