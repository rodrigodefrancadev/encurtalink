import styles from "./style.module.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Encurta Meu Link",
  description: "Encurtador de Links",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
