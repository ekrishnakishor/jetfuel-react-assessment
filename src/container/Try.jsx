import axios from "axios";
import React from "react";

const baseURL = "https://www.plugco.in/public/take_home_sample_feed/";

export default function App() {
  const [item, setItem] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL)
    .then((response) => {
      setItem(response.data);
    });
    // eslint-disable-next-line
  }, []);
  console.log(item);

  return (
    <div>
      <h1>{item.campaigns.campaign_name}</h1>
    </div>
  );
}