import "./globals.css";

export const metadata = {
  title: "RockPapperScissor",
  description: "Game App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg">
        {children}
      </body>
    </html>
  );
}
