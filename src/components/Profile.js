import picture from '/home/ec2-user/my_website/profile-app-meghanakrishnappa1/src/assets/img1.png'

function Profile() {
    return (
      <div>
        <body>
        <h4>Profile Pic</h4>
        <img src={picture} width =" 150" height = "150"></img>
        </body>
      </div>

    );
  }
  
  export default Profile;