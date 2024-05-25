"use client";

import { useRef, useState } from "react";
import {
  FormControl,
  Text,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";

export default function () {
  const inputRef = useRef<HTMLInputElement>(null);
  const [slug, setSlug] = useState(null);

  async function encurtarLink() {
    const link = inputRef.current?.value;
    console.log(link);
    if (!link) return;

    const response = await fetch("/api/link-curto", {
      method: "POST",
      body: JSON.stringify({
        link: link,
      }),
    });

    const linkCurto = await response.json();
    setSlug(linkCurto.slug);
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
        <Text>Encurtador de Link</Text>
        <FormControl w="100%" isInvalid>
          <Input
            w="100%"
            placeholder="https://www.seulink.com"
            ref={inputRef}
          />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
        <Button onClick={encurtarLink}>Encurtar Link!</Button>
        {slug && (
          <div style={{ marginTop: 24 }}>
            <a
              href={`${location.origin}/${slug}`}
              target="_blank"
              rel="noopener"
            >{`${location.origin}/${slug}`}</a>
          </div>
        )}
      </div>
    </div>
  );
}
