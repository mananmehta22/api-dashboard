import "./featuredInfo.css";
import { useQuery, gql } from "@apollo/client";

export const FETCH_API = gql`
  query {
    getUpcoming
    getPast
    getAll
  }
`;

export function FeaturedInfo() {
  const { loading, error, data } = useQuery(FETCH_API);
  if (error) return <p>Error :(</p>;
  if (loading) return <p>Loading...</p>;
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredLaunchContainer">
          <span className="featuredUpcoming">{data.getUpcoming}</span>
        </div>
        <span className="featuredSub">Upcoming</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredLaunchContainer">
          <span className="featuredUpcoming">{data.getPast}</span>
        </div>
        <span className="featuredSub">Past</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle"></span>
        <div className="featuredLaunchContainer">
          <span className="featuredUpcoming">{data.getAll}</span>
        </div>
        <span className="featuredSub">Total</span>
      </div>
    </div>
  );
}
