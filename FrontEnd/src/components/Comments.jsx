import { Avatar, Flex, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState } from "react";

const Comments = ({  }) => {
    const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex gap={4} my={2} py={2} w={"full"}>
        <Avatar name="Dan Abrahmov" src={userAvatar} size={"sm"} />
        <Flex flexDir={"column"} gap={1} w={"full"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {username}
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                {createdAt}
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text>{Comments}</Text>

          <Actions liked={liked} setLiked={setLiked} />
          <Text> {likes + (liked ? 1 : 0)}likes</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Comments;
