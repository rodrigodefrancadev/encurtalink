"use client";
import styles from "./style.module.css";
import { useSearchParams } from "next/navigation";

export default function () {
  const params = useSearchParams();
  const slug = params.get("slug");
  return (
    <div className={styles.container}>
      <div className={styles.container404}>404</div>
      {slug && <div className={styles.slug}>{slug}</div>}
      <div>Página não encontrada.</div>
    </div>
  );
}
