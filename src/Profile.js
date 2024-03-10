import React from 'react';
// import logo from './logo.svg';
import avatar from './avatar.jpeg'

const Profile = () => {
    return (
        <section>
            <div className='image-wrapper'>
                <img src={avatar} alt="" />
            </div>

            <div className="about">
                <p className="name">Ashong Abdallah</p>
                <p className="location">Accra, Ghana</p>
                <p className="job">
                    "Student and Junior Front-end developer"
                </p>
            </div>
        </section>
    )
}

export default Profile