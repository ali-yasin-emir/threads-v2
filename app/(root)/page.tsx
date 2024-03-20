import Thread from "/components/Thread";

const Home = () => {
  return (
    <div className="overflow-hidden w-full flex flex-col gap-12">
      <h1 className="text-start text-3xl text-white">Threads</h1>
      <Thread />
    </div>
  );
};

export default Home;
