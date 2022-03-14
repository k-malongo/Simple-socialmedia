import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/online"
export default function Rightbar({profile}){
    const HomeRightBar =()=>{
        return(
            <>
            <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="BirthdayText">
                        <b>Kelvin Malongo</b> and 3 other friends <b>have a birthday today</b>
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        )
    }
    const ProfileRightBar =()=>{
        return( 
        <>
        <h4 className=" rightbarTitle">User Information</h4>
        <div className="rightbarInfo"> 
            <div className="rightbarInfoItem"> 
                <span className= "rightbarInfoKey"> City</span>
                <span className= "rightbarInfoValue"> Nairobi</span>
            </div>
            <div className="rightbarInfoItem"> 
                <span className= "rightbarInfoKey"> From</span>
                <span className= "rightbarInfoValue"> Eldoret</span>
            </div>
            <div className="rightbarInfoItem"> 
                <span className= "rightbarInfoKey"> Relationship</span>
                <span className= "rightbarInfoValue"> Single</span>
            </div>
        </div>
        <h4 className=" rightbarTitle">User friend</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="./assets/persons/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Domin Gatwiri</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="./assets/persons/2.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Justus </span>
                </div>
                <div className="rightbarFollowing">
                    <img src="./assets/persons/3.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Domin Gatwiri</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="./assets/persons/4.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Zac Mwang</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="./assets/persons/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Domin Gatwiri</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="./assets/persons/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Domin Gatwiri</span>
                </div>
            </div>
        </>
        )
    }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar/> : <HomeRightBar/>}
            </div>
        </div>
    )
}