import "./styles.css";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

function Homework02() {
    return(
    <div className="profile-card-container">
    <div className="profile-card-control"><ProfileCard/></div>
    <ProfileCard/>
    <ProfileCard/>
    </div>
    )
}
export default Homework02;