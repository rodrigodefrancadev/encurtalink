"use client";
import { FunctionComponent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Box, Text } from "@chakra-ui/react";
import { getShortUrlBySlug } from "../_common/get-short-url-by-slug";

const Page404: FunctionComponent = () => {
  const params = useSearchParams();
  const slug = params.get("slug");
  return (
    <Box display={"grid"} placeItems="center" height="100vh" width="100vw">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        maxWidth={400}
      >
        <Text fontSize={"xxx-large"} fontWeight={"500"}>
          404
        </Text>
        {slug && (
          <Box backgroundColor={"white"} mt={4} py={1} px={2} borderRadius={8}>
            <Text>{getShortUrlBySlug(slug)}</Text>
          </Box>
        )}
        <Text fontSize={"large"} mt={4}>
          Página não encontrada!
        </Text>
      </Box>
    </Box>
  );
};

export default function () {
  return (
    <Suspense>
      <Page404 />
    </Suspense>
  );
}
