import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data, error, isLoading } = trpc.useQuery(["hello"]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default Home;
