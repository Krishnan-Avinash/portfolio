import React, { useId } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
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
  const location = useLocation();
  const elements = [
    {
      name: "Home",
      linkTo: "/",
      type: "route",
    },
    {
      name: "Blogs",
      linkTo: "/blog",
      type: "route",
    },
    {
      name: "Projects",
      linkTo: "",
      refTo: "projects",
      type: "scroll",
    },
    {
      name: "Contact",
      linkTo: "/contact",
      type: "route",
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <section className="header-comp">
        <Link to="/">
          <h1 className="header-title">Avinash</h1>
        </Link>
        <ul>
          {elements.map((item, index) => (
            <li key={index}>
              {item.type === "scroll" && location.pathname === "/" ? (
                <ScrollLink
                  to={item.refTo}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <Link to={item.linkTo}>{item.name}</Link>
              )}
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
                  <Link to={"/contact"} onClick={onClose}>
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
