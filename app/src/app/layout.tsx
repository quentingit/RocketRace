import "./globals.css";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import ClientApolloProvider from "./ClientApolloProvider";
import { generateMetadata as baseGenerateMetadata } from "./metadata";
import { Metadata } from "next";
import AudioPlayer from "./AudioPlayer";

export const generateMetadata = async (): Promise<Metadata> => {
  return baseGenerateMetadata();
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const musicSource = "/music.mp3";
  return (
    <html lang="fr">
      <body>
        <ClientApolloProvider>
          <AudioPlayer musicSource={musicSource} />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ClientApolloProvider>
      </body>
    </html>
  );
};

export default RootLayout;
