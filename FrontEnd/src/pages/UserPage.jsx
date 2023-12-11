import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();

        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
      } catch (error) {
        showToast("Error", error, "error");
      } finally {
        setLoading(false);
      }
    };

    const getPosts = async () =>{
      
    }

    getUser();
  }, [username, showToast]);

  if (!user && loading) {
    return (
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    );
  }

  return (
    <>
      {/* <UserHeader user={user} />
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
      /> */}
    </>
  );
};

export default UserPage;
