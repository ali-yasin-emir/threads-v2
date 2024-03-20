import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-12 w-full">
      <h1 className="text-3xl text-white">Create Thread</h1>
      <form className="flex flex-col gap-4 w-1/2 max-md:w-full">
        <label htmlFor="" className=" text-lg text-white">
          Content
        </label>
        <textarea
          rows={7}
          id="title"
          name="title"
          className="mb-4 p-2 border border-gray-300 rounded-md bg-gray-800 text-white resize-none"
        />
        <button className="w-fit px-4 py-2 bg-sky-700 text-white rounded-lg">
          Post Thread
        </button>
      </form>
    </div>
  );
};

export default Page;
