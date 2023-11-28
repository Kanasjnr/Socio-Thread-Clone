import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";

const UserPage = () => {
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
