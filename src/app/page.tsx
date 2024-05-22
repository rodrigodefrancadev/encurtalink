"use client";

import { useRef, useState } from "react";

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
    <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h4>Encurtador de Link</h4>
        <input ref={inputRef} />
        <button onClick={encurtarLink}>Encurtar Link!</button>
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
