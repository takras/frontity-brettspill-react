import React from "react";
import {
  PostContent,
  PostImage,
  PostOverlay,
  PostTitle,
  PrimaryPostArticle,
  SecondaryPostArticle,
} from "./components";
import generateGradient from "./genarate-gradient";
import { Flex, Box } from "@chakra-ui/react";
import { decode } from "frontity";
import Link from "../link";

export const PrimaryPostPreview = ({ data, ...props }) => {
  const { title, featured_media, link } = data;

  return (
    <Link link={link}>
      <PrimaryPostArticle bgImage={generateGradient()} role="group" {...props}>
        <PostOverlay />
        <PostImage {...featured_media} />
        <PostContent>
          <PostTitle>{decode(title)}</PostTitle>
        </PostContent>
      </PrimaryPostArticle>
    </Link>
  );
};

export const SecondaryPostPreview = ({ data, ...props }) => {
  const { title, link, featured_media } = data;

  return (
    <Link link={link} display="block" flex="1" {...props}>
      <SecondaryPostArticle bgImage={generateGradient()} role="group">
        <PostOverlay />
        <PostImage {...featured_media} />
        <PostContent padding="40px" textAlign="left" mt="0">
          <PostTitle as="h2" mt="auto" pt="40px" fontSize="1.65rem">
            {decode(title)}
          </PostTitle>
        </PostContent>
      </SecondaryPostArticle>
    </Link>
  );
};

export const FeaturedPostSection = ({ data, ...props }) => (
  <Flex as="section" direction={{ base: "column", lg: "row" }} {...props}>
    <Box width={{ base: "100%", lg: "65%" }} flexGrow="1">
      <PrimaryPostPreview data={data[0]} />
    </Box>
    <Flex
      direction={{ base: "column", md: "row", lg: "column" }}
      width={{ base: "100%", lg: "35%" }}
      flexGrow="1"
    >
      <SecondaryPostPreview data={data[1]} />
      <SecondaryPostPreview data={data[2]} />
    </Flex>
  </Flex>
);
