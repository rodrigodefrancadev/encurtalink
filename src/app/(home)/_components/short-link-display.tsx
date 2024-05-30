import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Box, Link, useToast } from "@chakra-ui/react";

import { FunctionComponent, useCallback } from "react";
import { useHomeContext } from "../context";

export const ShortLinkDisplay: FunctionComponent = () => {
  const { shortLink } = useHomeContext();
  const toast = useToast();

  const copiarLinkGerado = useCallback(() => {
    if (!shortLink) return;

    navigator.clipboard.writeText(shortLink);
    toast({
      title: "Link Copiado",
      description: shortLink,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }, [toast, shortLink]);

  if (!shortLink) {
    return null;
  }

  return (
    <Box
      mt={6}
      w="100%"
      flexDirection={"column"}
      alignItems={"center"}
      display={"flex"}
    >
      <Link href={shortLink} isExternal>
        {shortLink} <ExternalLinkIcon mx="2px" />
      </Link>

      <Button mt={2} colorScheme="teal" size="xs" onClick={copiarLinkGerado}>
        Copiar
      </Button>
    </Box>
  );
};
