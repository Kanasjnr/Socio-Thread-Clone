import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  CloseButton,
  Flex,
  FormControl,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import usePreviwImg from "../hooks/usePreviewImg";
import { BsFillImageFill } from "react-icons/bs";

const MAX_CHAR = 500;

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postText, setPostText] = useState("");
  const { handleImageChange, imgUrl, setImgUrl } = usePreviwImg();
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);

  const [remainingChar, setremainingChar] = useState(MAX_CHAR);
  const handleTextChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length > MAX_CHAR) {
      const truncatedText = inputText.style(0, MAX_CHAR);
      setremainingChar(0);
    } else {
      setPostText(inputText);
      setremainingChar(MAX_CHAR - inputText.length);
    }
  };
  const handleCreatePost = async () => {
    setLoading(true);
  };
  return (
    <>
      <Button
        position={"fixed"}
        bottom={10}
        right={10}
        leftIcon={<AddIcon />}
        bg={"gray"}
        onClick={onOpen}
      >
        Post
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody padding={6}>
            <FormControl>
              <Textarea
                placeholder="post Content goes here"
                onChange={handleTextChange}
                value={postText}
              />
              <Text
                fontSize="xs"
                fontWeight="bold"
                textAlign={"right"}
                margin={1}
                color={"gray.800"}
              >
                {remainingChar}/{MAX_CHAR}
              </Text>
              <Input
                type="file"
                hidden
                ref={imageRef}
                onChange={handleImageChange}
              />

              <BsFillImageFill
                style={{ marginLeft: "5px", cursor: "pointer" }}
                size={16}
                onClick={() => imageRef.current.click()}
              />
            </FormControl>
            {imgUrl && (
              <Flex mt={"full"} position={"relative"}>
                <Image src={imgUrl} alt="select image" />
                <CloseButton
                  onClick={() => setImgUrl("")}
                  right={2}
                  top={2}
                  pos={"absolute"}
                  bg={"gray.800"}
                />
              </Flex>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleCreatePost}
              isLoading={loading}
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;
