const productsSkeleton = [1, 2, 3, 4, 5, 6];

const ProductsLoading = () => {
  return (
    <section className="fix-height container m-auto px-5 animate-pulse">
      <div className="my-5 w-full md:w-2/3 m-auto bg-gray-300 h-12 rounded"></div>
      <div className="flex items-center justify-center flex-wrap gap-7">
        {productsSkeleton.map((item) => (
          <div
            key={item}
            className="w-full flex flex-col md:flex-row cursor-pointer justify-between items-center
                 bg-gray-200  rounded-lg mx-8 p-5 gap-5"
          >
            <div className="md:w-40 md:h-40 w-48 h-48  md:rounded-full rounded-full " />
            <h3 className="text-[30px] text-gray-500"></h3>
            <p className="text-[30px] text-gray-500"></p>
            <button className="bg-gray-300 p-2 px-5 rounded-lg cursor-pointer text-white text-[25px]"></button>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-2 mb-10">
        <div className="bg-gray-300 w-60 rounded-sm h-9"></div>
      </div>
    </section>
  );
};

export default ProductsLoading;
