// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Ellipse from "../assets/image/Ellipse 1.png";
import Logout from "../assets/image/logout.svg";

export default function MyComponent() {
  return (
    <div className="flex flex-col grow items-center py-8 mx-auto w-full text-sm font-medium leading-5 bg-white text-zinc-500 max-md:mt-8">
      <div className="flex gap-2 text-2xl font-semibold leading-8 whitespace-nowrap text-zinc-700">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cba9c6877ec3acf583ae8bfe6d71520e57b3dfa50a74032020e89eadf73f7b7?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
          className="shrink-0 aspect-[0.86] w-[31px"
        />
        <div>Buddy</div>
      </div>
      <div className="flex gap-5 justify-center self-stretch py-10 mt-10 tracking-wide text-amber-500">
        {/* <div className="shrink-0 my-auto w-1.5 h-8 bg-amber-500 rounded-none" /> */}
        <div className="flex gap-2 px-8 py-4 bg-white rounded-2xl shadow-2xl max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/74a2e6e7961f51b33b8ecaf3044108480031014aff745066c62da08671c118ba?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
            className="shrink-0 self-start aspect-square w-[18px]"
          />
          <div>My Portfolio</div>
        </div>
      </div>
      <div className="flex gap-2 px-8 py-4 mt-2 max-w-full tracking-wide w-[200px] max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7efeaf9ca3c48cd408133ff82a43d5fac1ee31c1fef34e4ea26979d457775c1d?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
          className="shrink-0 self-start aspect-square w-[18px]"
        />
        <div>My Group</div>
      </div>
      <div className="flex gap-2 px-8 py-4 mt-2 max-w-full tracking-wide whitespace-nowrap w-[200px] max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aa7d8df1472153efa21b776f8371010b9090cb0e2abb00b963b01449fce7bec?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
          className="shrink-0 self-start aspect-square w-[18px]"
        />
        <div>Messages</div>
      </div>
      <div className="flex gap-2 px-8 py-4 mt-2 max-w-full tracking-wide whitespace-nowrap w-[200px] max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4488c3a520cf18bc5ad10b15afbe8d164c1f2dca46e1987194091af1fd98ce32?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
          className="shrink-0 self-start aspect-square w-[18px]"
        />
        <div>Analytics</div>
      </div>
      <div className="flex gap-2 px-8 py-4 mt-2 max-w-full tracking-wide whitespace-nowrap w-[200px] max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/81cd6f8fd7c6d7bfd058979099f2092d4504c69846fc42efae59339899a2ef81?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
          className="shrink-0 self-start aspect-square w-[18px]"
        />
        <div>Pack</div>
      </div>
      <div className="flex gap-2 px-8 py-4 mt-2 max-w-full tracking-wide whitespace-nowrap w-[200px] max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6454198136c051fb03d9efe089162bf8dd7bb85420f3e7bc75d07939d20f706a?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
          className="shrink-0 self-start aspect-square w-[18px]"
        />
        <div>Settings</div>
      </div>
      <footer className="mt-80">
        <div className='bg-white flex m-6 justify-center p-4 shadow-lg mb-8 rounded-xl"'>
          <div className="grid justify-center m-0  mt-absolute ">
            <center>
              <img src={Ellipse} alt="logo" className="gap-y-4 w-70" />{" "}
            </center>
            <div className="">
              <h3 className="text-center text-base font-medium leading-6 tracking-tighter">
                Theresa milly
              </h3>
              <p className="text-center text-gray-500 pb-3">Influencer</p>
              <center>
                <button className="py-2 gap-2 bg-orange-200 border-none rounded-lg flex justify-center items-center p-4 gap-x-4">
                  <img src={Logout} alt="alt" />
                  <p className="text-sm font-[400] text-orange-400">Logout</p>
                </button>
              </center>
            </div>
          </div>
        </div>
      </footer>
      {/* <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a35af7c75e69e3609d76a73f28b5de48d61db78f63739e921ef59e55ede6085a?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a35af7c75e69e3609d76a73f28b5de48d61db78f63739e921ef59e55ede6085a?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a35af7c75e69e3609d76a73f28b5de48d61db78f63739e921ef59e55ede6085a?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a35af7c75e69e3609d76a73f28b5de48d61db78f63739e921ef59e55ede6085a?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a35af7c75e69e3609d76a73f28b5de48d61db78f63739e921ef59e55ede6085a?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a35af7c75e69e3609d76a73f28b5de48d61db78f63739e921ef59e55ede6085a?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a35af7c75e69e3609d76a73f28b5de48d61db78f63739e921ef59e55ede6085a?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a35af7c75e69e3609d76a73f28b5de48d61db78f63739e921ef59e55ede6085a?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
        className="mx-6 mt-80 aspect-[1.14] w-[202px] max-md:mt-10"
      /> */}
    </div>
  );
}


