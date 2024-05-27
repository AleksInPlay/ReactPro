import "./styles.css";

function ProfileCard (){
    const userData = {
        avatar: 
        "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
        userName: "Alex",
        profession:"Web Developer",
        hobbies:["Reading", "Traveling", "Photography"]

    };
    return ( 
    <div className='profile-card-wrapper'>
        <img src={userData.avatar}/>
        <h3>{userData.userName}</h3>
        <p><span className="property-name">Profession: </span> {userData.profession}</p>
        <p><span className="property-name">Hobby:</span> {userData.hobbies[0]}</p>
    </div>
    );
}


export default ProfileCard;