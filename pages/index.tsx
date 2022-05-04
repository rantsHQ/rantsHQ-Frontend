import Head from "next/head";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [monicker, setMonicker] = useState("");

  useEffect(() => {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    setMonicker(uint32.toString(16));
  }, []);

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory snap">
      <Head>
        <title>rantsHQ</title>
        <meta name="description" content="rantsHQ - Let is out" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen bg-gray-100 p-8 snap-start snap-always">
        <div className="bg-white border rounded-lg flex flex-col h-full justify-center items-center">
          <header>
            <h1 className="font-medium text-4xl text-gray-700 md:text-6xl lg:text-8xl">
              rantsHQ
            </h1>
            <h2 className="text-xs text-gray-500">Watch this space</h2>
          </header>
        </div>
      </div>

      <div className="h-screen bg-gray-100 p-8 snap-always snap-start">
        <div className="bg-white border rounded-lg flex flex-col h-full w-full justify-center items-center">
          <div className="flex flex-col max-w-screen-md w-full gap-4">
            <header>
              <h1 className="font-medium font-mono text-4xl text-gray-700 md:text-6xl">
                Howdy?
              </h1>
            </header>

            <input
              className="border rounded bg-gray-50 w-full outline-gray-600 p-4"
              placeholder="monicker (optional)"
            />
            <textarea
              className="border rounded bg-gray-50 h-32 w-full outline-gray-600 p-4"
              placeholder="What's on your mind?"
            ></textarea>
            <div className="grid gap-4 grid-cols-2">
              <label className="border rounded flex bg-gray-50 w-full p-4 gap-4 items-center hover:border-gray-600">
                <input type="checkbox" className="accent-gray-800" />
                <div>Remember me</div>
              </label>
              <button className="border rounded bg-gray-50 w-full p-4 hover:border-gray-600">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
