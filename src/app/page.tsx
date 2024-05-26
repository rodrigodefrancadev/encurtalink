"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormControl,
  Text,
  FormErrorMessage,
  Input,
  Button,
  Link,
  Box,
  useToast,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  link: z.string().url("Link Inválido"),
});

type FormData = z.infer<typeof formSchema>;

export default function () {
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [slug, setSlug] = useState(null);

  async function onSubmit(formData: FormData) {
    const link = formData.link;
    if (!link) return;

    const response = await fetch("/api/short-link", {
      method: "POST",
      body: JSON.stringify({
        link: link,
      }),
    });

    const linkCurto = await response.json();
    setSlug(linkCurto.slug);
  }

  function copiarLinkGerado() {
    const link = `${location.origin}/${slug}`;
    navigator.clipboard.writeText(link);
    toast({
      title: "Link Copiado",
      description: link,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: 240,
        }}
      >
        <Text align={"center"} m={5} fontSize={24} fontWeight={600}>
          Encurtador de Link
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl w="100%" isInvalid={!!errors.link}>
            <Input
              w="100%"
              placeholder="https://www.seulink.com"
              {...register("link")}
            />
            <FormErrorMessage>
              <span>{errors.link && errors.link.message}</span>
            </FormErrorMessage>
          </FormControl>
          <Button
            isLoading={isSubmitting}
            type="submit"
            colorScheme="purple"
            mt={4}
            w="100%"
          >
            Encurtar Link!
          </Button>
        </form>

        {slug && (
          <Box
            mt={6}
            w="100%"
            flexDirection={"column"}
            alignItems={"center"}
            display={"flex"}
          >
            <Link href={`${location.origin}/${slug}`} isExternal>
              {`${location.origin}/${slug}`} <ExternalLinkIcon mx="2px" />
            </Link>

            <Button colorScheme="teal" size="xs" onClick={copiarLinkGerado}>
              Copiar
            </Button>
          </Box>
        )}
      </div>
    </div>
  );
}
