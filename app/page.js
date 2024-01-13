import Link from "next/link";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">VersatileGPT</h1>
          <p className="py-6 text-lg leading-loose">
            VersatileGPT: An innovative full-stack application that seamlessly
            blends AI technology with the practicality of city touring and chat
            functionality.
          </p>
          <Link href="/chat" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
