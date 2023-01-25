import React from "react";
import Typewriter from "typewriter-effect";
import ScrollButton from "./ScrollButton";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Snackbar } from "@mui/material";

import fscube from "../logos/fscubegrey.png";
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
      width: 90,
      borderRadius: 2,
    },
    media2: {
      boxShadow: "0px 0px 8px 0px #fff",
      "&:hover": { boxShadow: "0px 0px 20px 0px #fff" },
    },
  };

  return (
    <div className="intro">
      <div className="typewriter2">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Leveraging Flipside's core competencies, we also build dashboards and tooling to increase both transparency and the governance UX of the communities that we serve. To us, participating in governance is much more than acquiring tokens and voting on proposals."
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
        <h1>Dashboards & Tooling</h1>
        <div className="dashb">
          <div className="dbleft">
            <Card
              sx={{
                maxWidth: 600,
                borderRadius: 3,
                marginBottom: 6,
              }}
              className="dbcard"
            >
              <CardActionArea
                sx={{ display: "flex", backgroundColor: "#171b20", padding: 1 }}
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
                    color: "#fff",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontFamily: "Courier New" }}
                  >
                    Optimism Governance Dashboard
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="text.secondary"
                    sx={{ fontFamily: "Courier New" }}
                  >
                    Built with Flipside Crypto's ShroomDK. This dashboard was
                    designed to track governance activity and OP tokens
                    delegated on the Optimism network (Ethereum L2).
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
                  href={"https://op-governance.vercel.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontFamily: "Courier New" }}
                >
                  Visit
                </Button>
              </CardActions>
            </Card>
            <Card
              sx={{ maxWidth: 600, borderRadius: 3, marginBottom: 6 }}
              className="dbcard"
            >
              <CardActionArea
                sx={{ display: "flex", backgroundColor: "#171b20", padding: 1 }}
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
                    color: "#fff",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontFamily: "Courier New" }}
                  >
                    Snapshot Analytics
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="text.secondary"
                    sx={{ fontFamily: "Courier New" }}
                  >
                    Built with Flipside Crypto's ShroomDK. This dashboard was
                    designed to track governance activity across Snapshot spaces
                    with charts to monitor trends in usage and leaderboards to
                    identify the most active communities & contributors.
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
                  href={"https://flipsidegov-snapshot.vercel.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontFamily: "Courier New" }}
                >
                  Visit
                </Button>
              </CardActions>
            </Card>
          </div>
          <div className="dbright">
            <Card
              sx={{ maxWidth: 600, borderRadius: 3, marginBottom: 6 }}
              className="dbcard"
            >
              <CardActionArea
                sx={{ display: "flex", backgroundColor: "#171b20", padding: 1 }}
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
                    color: "#fff",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontFamily: "Courier New" }}
                  >
                    Marinade Governance Dashboard
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="text.secondary"
                    sx={{ fontFamily: "Courier New" }}
                  >
                    This dashboard was built to help the Marinade community gain
                    a better understanding of protocol governance and the MNDE
                    token. We also monitor which validators receive the most
                    community support.
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
                  href={"https://flipsidegov-mnde.vercel.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontFamily: "Courier New" }}
                >
                  Visit
                </Button>
              </CardActions>
            </Card>
            <Card
              sx={{ maxWidth: 600, borderRadius: 3, marginBottom: 6 }}
              className="dbcard"
            >
              <CardActionArea
                sx={{ display: "flex", backgroundColor: "#171b20", padding: 1 }}
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
                    color: "#fff",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontFamily: "Courier New" }}
                  >
                    New Dashboard Coming Soon(TM)
                  </Typography>
                  <Typography
                    variant="body2"
                    // color="text.secondary"
                    sx={{ fontFamily: "Courier New" }}
                  >
                    Built with Flipside Crypto's ShroomDK. This dashboard was
                    designed to track governance activity across Snapshot spaces
                    with charts to monitor trends in usage and leaderboards to
                    identify the most active communities & contributors.
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
                  href={"/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontFamily: "Courier New" }}
                >
                  Visit
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
      <div className="scroller">
        <ScrollButton />
      </div>
    </div>
  );
}

export default Dashboards;
