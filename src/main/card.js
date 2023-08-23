import './App.css'
const Card = ({profile}) => {
    return (
        <div className="github-profile">
            <img src={profile.avatar_url} alt='x'/>
            <div className='info'>
                <div className="name">
                    {profile.name}
                </div>
                <div className="company">
                    {profile.company}
                </div>
            </div>
        </div>
    );
}
 
export default Card;