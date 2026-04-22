import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <Image
          src="/Logo.png"
          alt="Standard Fire"
          className="w-1/4"
          width={80}
          height={80}
        />
        <h1 className="text-center text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          Professional Fire Safety Solutions
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <div className="p-4 text-center sm:text-left">
            <h3 className="text-2xl font-bold">Our Services</h3>
            <div className="flex flex-col gap-2 text-lg">
              <span className="text-lg">
                Fire Extinguishers, Sprinkler Systems, Dry and Wet Risers
              </span>
              <span className="text-lg">
                Covering London and the South East
              </span>
            </div>
          </div>
          <div className="p-4 text-center sm:text-left">
            <h3 className="text-2xl font-bold">Contact Us</h3>
            <div className="flex flex-col gap-2 text-lg">
              <span>
                Call on <strong>0800 122 3931</strong>
              </span>{" "}
              <span>
                Email at{" "}
                <a href="mailto:support@standardfire.co.uk">
                  <strong>support@standardfire.co.uk</strong>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <h4>
        <em>Full site coming soon!</em>
      </h4>
    </main>
  );
}
