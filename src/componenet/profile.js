import React from 'react';
import PropTypes from "prop-types";
const Profile = (props) => {



  const handleName = e => {
    e.preventDefault();
    alert(`my name is ${props.FullName}`);}






  return ( <div>
<div>
  <span>FullName: {props.FullName}</span>
</div>
<div>
  <span>bio: {props.bio}</span>
</div>
<div>
  <span>profession: {props.profession}</span>
</div>
  <div>{props.children}</div>
  <button className="btn" onClick={handleName}>click me</button>
  </div> );
  
}
Profile.propTypes = {
  FullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
 };
 Profile.defaultProps = {
  FullName:"Med",
   bio:"I am Medamine Zouari",
    profession:"Developper",
 }
export default Profile;
