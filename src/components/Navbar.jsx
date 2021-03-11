import React from "react";
import {
  Stack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  Box,
  useToast
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const toast = useToast();
  const Cucurigu = () => {
    toast({
      title: "🐓🐓🐓🐓🐓🐓🐓",
      description: "Cucurigu boieri mari dati punguta cu 2 bani",
      status: "success",
      duration: 6000,
      isClosable: false
    });
  };
  return (
    <div>
      <Box bg="black" w="100%" p={4} color="facebook">
        <Menu>
          {/* After further investigation the following would work if given an href="#" */}
          <MenuButton colorScheme="#131313" as={Button}>
            <AiOutlineMenu />
          </MenuButton>
          <Portal>
            <MenuList>
              <MenuItem onClick={Cucurigu}>Big Cock 🐓🐓🐓🐓</MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </Box>
      <Stack
        padding={4}
        justifyContent="center"
        alignItems="center"
        direction="row"
        spacing={6}
      >
        sdf
      </Stack>
    </div>
  );
}

export default Navbar;
