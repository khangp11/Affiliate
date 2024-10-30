import Link from "next/link";

const Error500 = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="relative h-screen">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full text-center p-4">
          <div className="relative h-56">
            <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-light text-primary uppercase">
              500
            </h1>
          </div>
          <h2 className="text-2xl font-light uppercase mt-0 mb-6 tracking-wide">Access Forbidden</h2>
          <p className="text-base font-light mt-0 mb-6">
            You do not have permission to access the document or program that you requested.
            <br />
            <Link href="/" className="text-primary font-light border-b border-dashed border-primary">
              Return to homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error500;
