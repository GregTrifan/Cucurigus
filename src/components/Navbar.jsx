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
  useToast,
  useColorMode,
  useColorModeValue,
  DarkMode
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
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
      <DarkMode>
        <Box w="100%" p={4} bg="gray.900" color="white">
          <Menu>
            <MenuButton as={Button}>
              <AiOutlineMenu />
            </MenuButton>
            <Portal>
              <MenuList color="#FFFFFF" m={0}>
                <MenuItem onClick={Cucurigu}>
                  Big Cock
                  <span role="img" aria-label="cocks">
                    {" "}
                    🐓🐓🐓🐓
                  </span>
                </MenuItem>
                <MenuItem onClick={toggleColorMode}>
                  {colorMode === "light" ? "Go Dark 🌙" : "Go Light 🌞"}
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </Box>
      </DarkMode>
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
