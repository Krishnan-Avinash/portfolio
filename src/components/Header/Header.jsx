import React, { useId } from "react";
import { Link, Outlet } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import {
  Button,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  HStack,
} from "@chakra-ui/react";

const Header = () => {
  const elements = [
    { name: "Home", linkTo: "/" },
    { name: "Blogs", linkTo: "/blog" },
    { name: "Projects", linkTo: "/" },
    { name: "Contact", linkTo: "/" },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <section className="header-comp">
        <h1 className="header-title">Avinash</h1>
        <ul>
          {elements.map((item) => (
            <li key={useId()}>
              <Link to={item.linkTo}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Button
          pos={"sticky"}
          top={"4"}
          right={"4"}
          colorScheme="blue"
          className="header-right"
          p={"0"}
          w={"10"}
          h={"10"}
          onClick={onOpen}
        >
          <BiMenuAltRight size={"20"} />
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>PORTFOLIO</DrawerHeader>
            <DrawerBody>
              <VStack alignItems={"flex-start"}>
                <Button variant={"ghost"} colorScheme="blue">
                  <Link to={"/"} onClick={onClose}>
                    Home
                  </Link>
                </Button>
                <Button variant={"ghost"} colorScheme="blue">
                  <Link to={"/blog"} onClick={onClose}>
                    Blogs
                  </Link>
                </Button>
                <Button variant={"ghost"} colorScheme="blue">
                  <Link to={"/"} onClick={onClose}>
                    Projects
                  </Link>
                </Button>
                <Button variant={"ghost"} colorScheme="blue">
                  <Link to={"/"} onClick={onClose}>
                    Contact
                  </Link>
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </section>
      <Outlet />
    </>
  );
};

export default Header;
