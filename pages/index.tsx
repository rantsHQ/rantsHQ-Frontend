import Head from "next/head";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>rantsHQ</title>
        <meta name="description" content="rantsHQ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen bg-gray-100 p-8">
        <div className="bg-white border rounded-lg flex flex-col h-full justify-center items-center">
          <div className="font-medium text-4xl text-gray-700 md:text-6xl lg:text-8xl">
            rantsHQ
            <div className="text-xs text-gray-500">Watch this space</div>
          </div>
        </div>
      </div>
    </div>
  );
}
