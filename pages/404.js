import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <Head>
        <title>Ninja List | 404 - error</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="not-found">
        <h1>Ooooops....</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back to <Link href="/">Homepage</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
