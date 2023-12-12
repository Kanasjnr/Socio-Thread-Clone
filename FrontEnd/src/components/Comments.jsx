import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState } from "react";

const Comments = ({ reply }) => {

  return (
    <>
      <Flex gap={4} my={2} py={2} w={"full"}>
        <Avatar name={reply.username} src={reply.userProfilePic} size={"sm"} />
        <Flex flexDir={"column"} gap={1} w={"full"}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {/* {reply.username} */}
            </Text>
          </Flex>
          <Text>{reply}</Text>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Comments;
