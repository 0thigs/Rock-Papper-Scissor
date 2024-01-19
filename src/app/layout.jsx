import "./globals.css";

export const metadata = {
  title: "RockPapperScissor",
  description: "Game App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col items-center h-screen p-5 bg-gradient-to-t from-blue-start to-blue-end">
        {children}
      </body>
    </html>
  );
}
