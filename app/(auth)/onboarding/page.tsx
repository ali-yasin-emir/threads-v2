import { currentUser } from "@clerk/nextjs";
import AccountProfile from "/components/forms/AccountProfile";

const Onboarding = async () => {
  const user = await currentUser();

  // Fetch user info from MongDB
  const userInfo = {};

  // Merge user data with user info
  const userData = {
    id: user?.id, // came from Clerk
    objectId: userInfo._id, // came from MongoDB
    // if you didn't change your username, use the one from Clerk, else use the one from MongoDB
    username: userInfo.username || user.username,
    // if you didn't change your name, use the one from Clerk, else use the one from MongoDB
    // if you don't use both of them, use an empty string
    name: userInfo.name || user.firstName || "",
    // if you don't have a bio, use an empty string
    bio: userInfo.bio || "",
    // if you don't have an image, use the one from Clerk, else use the one from MongoDB
    image: userInfo.image || user?.imageUrl,
  };

  return (
    <div className="flex flex-col gap-4 shadow-xl bg-lime-500 text-white py-16 px-20  rounded-lg max-md:mx-8">
      <h1 className="text-4xl">Onboarding</h1>
      <p className="text-md">Complete your profile now</p>
      <AccountProfile user={userData} btnTitle="Continue" />
    </div>
  );
};

export default Onboarding;
