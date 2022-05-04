import Head from "next/head";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [monicker, setMonicker] = useState("");

  useEffect(() => {
    const uuid = window.crypto.randomUUID();
    console.log(uuid);
    setMonicker(uuid);
  }, []);

  return (
    <div className="h-screen bg-gray-100 overflow-y-auto snap-y snap-mandatory md:snap">
      <Head>
        <title>rantsHQ</title>
        <meta name="description" content="rantsHQ - Let is out" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-white min-h-screen snap-always snap-start md:h-screen md:p-8">
        <div className="bg-white flex-grow h-full grid  grid-cols-1 md:(border rounded grid-cols-2) ">
          <div className="flex flex-col h-full bg-gray-100 p-12 justify-center items-center md:border-r">
            <header>
              <h1 className="font-medium text-4xl text-gray-700 md:text-6xl lg:text-8xl">
                rantsHQ
              </h1>
              <h2 className="text-xs text-gray-500">Watch this space</h2>
            </header>
          </div>

          <div className="flex flex-col h-full w-full justify-center items-center">
            <form className="flex flex-col max-w-screen-md w-full p-4 py-12 gap-4">
              <h1 className="font-medium text-2xl text-gray-700 md:text-4xl">
                Howdy?
              </h1>

              <input
                className="border rounded bg-gray-50 w-full outline-gray-600 p-4 text-gray-400"
                placeholder="Monicker (Optional)"
                value={monicker}
                readOnly
              />

              <textarea
                className="border rounded bg-gray-50 h-32 w-full outline-gray-600 p-4 "
                placeholder="What's on your mind?"
              ></textarea>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="border rounded flex bg-gray-50 w-full p-3 gap-4 items-center hover:border-gray-600">
                  <input type="checkbox" />{" "}
                  <div className="text-xs">
                    Assent to our{" "}
                    <a href="#rules" className="underline">
                      terms and conditions
                    </a>
                  </div>
                </label>

                <button className="border rounded bg-gray-50 w-full p-3 hover:border-gray-600">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="h-screen bg-gray-100 p-4 snap-start snap-always md:p-8">
        <div className="bg-white border rounded-lg flex flex-col h-full p-4 justify-center items-center">
          <div className="text-2xl text-gray-500 ">Watch this space</div>
        </div>
      </div>
    </div>
  );
}
