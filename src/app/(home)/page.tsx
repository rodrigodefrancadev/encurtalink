"use client";
import { Text, Box } from "@chakra-ui/react";
import { ShortLinkForm } from "./_components/form";
import { HomeContextProvider } from "./context";
import { ShortLinkDisplay } from "./_components/short-link-display";

export default function () {
  return (
    <HomeContextProvider>
      <Box display={"grid"} placeItems="center" height="100vh" width="100vw">
        <Box display="flex" flexDirection="column" width="100%" maxWidth={240}>
          <Text align={"center"} m={5} fontSize={24} fontWeight={600}>
            Encurtador de Link
          </Text>

          <ShortLinkForm />

          <ShortLinkDisplay />
        </Box>
      </Box>
    </HomeContextProvider>
  );
}
