"use client";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl sm:text-3xl text-center sm:text-left">
          Faucet Interview 🥳
        </h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            User needs to be able to enter an address to receive funds at.
          </li>
          <li className="mb-2">User needs to receive funds from the faucet</li>
          <li className="mb-2">
            User should not have to pay for gas to receive funds from the
            faucet!
          </li>
          <li>We already set ALCHEMY_API_KEY in environment variables.</li>
        </ol>

        <div className="w-full border-b border-black/[.08] dark:border-white/[.145]" />

        <div className="flex gap-4 items-center flex-col w-full">
          {/* Input to enter address */}
          <input
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] flex items-center justify-center  dark:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-full"
            placeholder="Enter user address"
          />

          {/* Button to send request */}
          <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            onClick={() =>
              fetch("/api", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ address: "0x" }),
              }).then(async (res) => {
                const json = await res.json();
                alert(JSON.stringify(json, null, 2));
              })
            }
          >
            Send request to backend
          </button>
        </div>
      </main>
    </div>
  );
}
