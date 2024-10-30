import Link from "next/link";
import { useEffect, useState } from "react";

interface DefaultErrorProps {
  statusCode: number;
}

const DefaultError: React.FC<DefaultErrorProps> = ({ statusCode }) => {
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (statusCode === 404) {
      setStatus("THIS PAGE COULD NOT BE FOUND");
    } else if (statusCode === 500) {
      setStatus("Oooops! Internal Server Error.");
    } else if (statusCode === 403) {
      setStatus("Access Forbidden");
    }
  }, [statusCode]);

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="relative h-screen">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full text-center p-4">
          <div className="relative h-56">
            <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[186px] font-light text-primary uppercase">
              {statusCode}
            </h1>
          </div>
          <h2 className="text-2xl font-light uppercase mt-0 mb-6 tracking-widest">{status}</h2>
          <p className="text-base font-light mt-0 mb-6">
            <Link href="/" className="text-primary font-light border-b border-dashed border-primary">
              Return to homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefaultError;
