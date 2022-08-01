export default function ({ setUserName, getUserApi }) {
  return (
    <div className="max-w-md px-4 mx-auto mt-12">
      <div className="flex items-center text-gray-400 border rounded-md mb-10">
        <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r">@</div>
        <form
          onSubmit={(e) => getUserApi(e)}
          className="flex justify-between w-full"
        >
          <input
            type="text"
            placeholder="e.g alieldeba"
            id="username"
            className="w-full p-2.5 ml-2 bg-transparent outline-none"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className="px-5 py-2.5 text-gray-700 border duration-100 hover:border-indigo-600 active:shadow-lg">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
