import React, {useState, useEffect} from "react";
import axios from "axios";
import "./featuredInfo.css";

export default function FeaturedInfo() {
    const urlUpcoming = 'https://api.spacexdata.com/v5/launches/upcoming';
    const urlPast = 'https://api.spacexdata.com/v5/launches/past';
    const Total = 'https://api.spacexdata.com/v5/launches';

    const [rocket, setRocket] = useState(null)
    const [rocket1, setRocket1] = useState(null)
    const [rocket2, setRocket2] = useState(null)

    useEffect(() => {
      axios.get(urlUpcoming)
            .then(response => {
                console.log(response)
                setRocket(response.data)
            })
            .catch(err => {
              console.log(err)
            })
    })

    useEffect(() => {
      axios.get(urlPast)
            .then(response => {
                console.log(response)
                setRocket1(response.data)
            })
            .catch(err => {
              console.log(err)
            })
    })

    useEffect(() => {
      axios.get(Total)
            .then(response => {
                console.log(response)
                setRocket2(response.data)
            })
            .catch(err => {
              console.log(err)
            })
    })
    
    return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredLaunchContainer">
          <span className="featuredUpcoming">{rocket.length}</span>
        </div>
        <span className="featuredSub">Upcoming</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredLaunchContainer">
          <span className="featuredUpcoming">{rocket1.length}</span>
        </div>
        <span className="featuredSub">Past</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredLaunchContainer">
          <span className="featuredUpcoming">{rocket2.length}</span>
        </div>
        <span className="featuredSub">Total</span>
      </div>
    </div>
  );
}
