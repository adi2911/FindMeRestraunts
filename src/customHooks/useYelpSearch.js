import { useEffect, useState } from "react";
import yelp from "../apis/yelp";

export default () => {
  const [error, setError] = useState("");
  //restrauntsobject from yelp api
  const [restraunts, setRestraunts] = useState([]);

  const searchRestraunts = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50, //default is 20 results
          term: term,
          location: "san jose",
        },
      });
      setRestraunts(response.data.businesses); // Got this from yelp api documentation
      setError("");
    } catch (e) {
      console.log("Error occured", e);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    searchRestraunts();
  }, []);

  return [restraunts, error, setRestraunts];
};
