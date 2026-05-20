export default function Women() {
  return (
    <section className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-3xl p-10 max-w-xl w-full text-center border border-pink-100">
        
        <span className="text-sm font-medium bg-pink-100 text-pink-600 px-4 py-1 rounded-full">
          Women Collection
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-6 leading-tight">
          Discover Your
          <span className="text-pink-500"> Style</span>
        </h1>

        <p className="text-gray-500 mt-4 text-base leading-7">
          Explore the latest fashion trends designed to make you feel confident,
          elegant, and beautiful every day.
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 text-white px-6 py-3 rounded-xl font-medium">
            Shop Now
          </button>

          <button className="border border-pink-300 text-pink-500 hover:bg-pink-50 transition-all duration-300 px-6 py-3 rounded-xl font-medium">
            Explore
          </button>
        </div>

        <div className="mt-10 text-5xl">
          ❤️ 🥰 ✨ 👗
        </div>
      </div>
    </section>
  );
}