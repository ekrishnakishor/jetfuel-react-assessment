import React, { useState, useEffect } from "react";
import "../styles/style.css";
import axios from "axios";
import Play from "../img/play.svg";
import Link from "../img/link.svg";
import Download from "../img/download.svg";

const Home = () => {
  const [items, setItems] = useState(null);
  const getRe = () => {
    console.log("aa");
    axios
      .get("https://www.plugco.in/public/take_home_sample_feed/")
      .then((response) => {
        console.log(response);
        const re = response.data;
        setItems(re);
      });
  };
  useEffect(() => {
    getRe();
  }, []);

  return (
    <>
      <div className="main">
        <h1>PLUGS</h1>
        {items &&
          items.campaigns.map((campaign) => (
            // <div className="list">key={campaign.id}
            <>
              <div className="heading" key={campaign.id}>
                <img
                  className="icon"
                  src={campaign.campaign_icon_url}
                  alt="icon"
                />
                <div className="title">
                  <h1>{campaign.campaign_name}</h1>
                  <p>
                    <b>{campaign.pay_per_install}</b> per install
                  </p>
                </div>
              </div>
              <div className="cover">
                {campaign.medias.map((media) => {
                  return (
                    <div className="cover-1">
                      <div className="link">
                        <img
                          onClick={() =>
                            navigator.clipboard.writeText(
                              `${media.tracking_link}`
                            )
                          }
                          src={Link}
                          alt=""
                        />
                        <a href={media.download_url}>
                          <img src={Download} alt="" />
                        </a>
                      </div>
                      <div className="play">
                        {media.media_type === "video" ? (
                          <img src={Play} alt="" />
                        ) : null}
                      </div>
                      <img src={media.cover_photo_url} alt="" />
                    </div>
                  );
                })}
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Home;
