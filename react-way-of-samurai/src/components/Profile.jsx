import React from 'react';
import './Profile.css'
const Profile = () => {
    return <div className='content'>
    <div>
      <img src='https://avatars.mds.yandex.net/i?id=ac00471b25a517d733597c5bc547d74a-4220247-images-thumbs&n=13' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className= 'posts'>
        <div className= 'item'>
          post 1
        </div>
        <div className= 'item'>
          post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;