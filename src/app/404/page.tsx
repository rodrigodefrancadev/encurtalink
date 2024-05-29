"use client";
import { FunctionComponent, Suspense } from "react";
import styles from "./style.module.css";
import { useSearchParams } from "next/navigation";

const Page404: FunctionComponent = () => {
  const params = useSearchParams();
  const slug = params.get("slug");
  return (
    <div className={styles.container}>
      <div className={styles.container404}>404</div>
      {slug && <div className={styles.slug}>{slug}</div>}
      <div>Página não encontrada.</div>
    </div>
  );
};

export default function () {
  return (
    <Suspense>
      <Page404 />
    </Suspense>
  );
}
