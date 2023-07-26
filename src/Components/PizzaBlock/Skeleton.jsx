import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="135" cy="135" r="125" />
    <rect x="0" y="266" rx="8" ry="8" width="280" height="20" />
    <rect x="131" y="301" rx="0" ry="0" width="13" height="0" />
    <rect x="0" y="308" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="412" rx="10" ry="10" width="102" height="39" />
    <rect x="87" y="446" rx="0" ry="0" width="2" height="5" />
    <rect x="129" y="408" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
