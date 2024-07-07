import React from "react"
import ContentLoader from "react-content-loader"

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
    <circle cx="138" cy="138" r="138" /> 
    <rect x="0" y="282" rx="10" ry="10" width="283" height="32" /> 
    <rect x="5" y="323" rx="0" ry="0" width="280" height="88" /> 
    <rect x="4" y="426" rx="10" ry="10" width="95" height="30" /> 
    <rect x="133" y="418" rx="10" ry="10" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton