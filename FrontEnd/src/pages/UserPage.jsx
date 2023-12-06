import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const [user, setUser]= useState(null)
  const {username} = useParams()

  useEffect(() =>{
const getUser = async () =>{
    try {
        const res = await fetch (`/api/users/profile/${username}`)
        const data = await res.json()

        console.log(data);
    } catch (error) {
      console.log(error);
    }
}
  },[username])
  return (
    <>
      <UserHeader />
      <UserPosts
      likes={10}
       replies={50}
        postImg={"/post1.png"}
        postTitle={"Helloo"}
      />
      <UserPosts
       likes={3000}
       replies={500}
        postImg={""}
        postTitle={"This Is Great"}
      />
      <UserPosts
        likes={109}
        replies={2}
        postImg={"/post3.png"}
        postTitle={"Wow!"}
      />
    
   
    </>
  );
};

export default UserPage;
