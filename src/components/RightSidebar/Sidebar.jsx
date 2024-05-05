// eslint-disable-next-line no-unused-vars
import React from 'react'

function SidebarRight() {
  return (
    <div className="flex flex-col grow max-md:mt-8">
      <div className="flex flex-col p-5 w-full bg-white rounded-2xl">
        <div className="flex gap-4 justify-between">
          <div className="text-xl font-bold leading-7 text-zinc-700">
            Watchlist
          </div>
          <div className="my-auto text-xs font-semibold text-amber-500 uppercase">
            View All
          </div>
        </div>
        <div className="flex gap-2 justify-between px-4 py-3 mt-4 font-medium whitespace-nowrap rounded-xl bg-neutral-100 leading-[149.3%]">
          <div className="flex flex-col">
            <div className="flex gap-5 justify-between text-lg font-semibold text-zinc-700">
              <div>AAPL</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b3bf298adcfbcce41919ea75391e186c9e20ba116d41fb3b19e01e22c80e570?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
                className="shrink-0 w-6 aspect-square"
              />
            </div>
            <div className="mt-2 text-base text-neutral-400">$142.90</div>
            <div className="text-xs text-green-600">+0.47%</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/acb654f4c767bda84cfabec96ad1e6055c65d60f847e26217094af8186e1d9f0?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
            className="shrink-0 my-auto max-w-full aspect-[2.63] w-[154px]"
          />
        </div>
        <div className="flex gap-2 justify-between px-4 py-3 mt-3 font-medium whitespace-nowrap rounded-xl bg-neutral-100 leading-[149.3%]">
          <div className="flex flex-col">
            <div className="flex gap-5 justify-between text-lg font-semibold text-zinc-700">
              <div>BPL</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d9f04eaba08265c9d9fbab229559ce1110cc23a4fb8bdbbd9c8979e36b681d7?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
                className="shrink-0 w-6 aspect-square"
              />
            </div>
            <div className="mt-2 text-base text-neutral-400">$142.90</div>
            <div className="text-xs text-rose-500">-0.78%</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/af2511c0467ca15d2c905356d5ba2ce410593413394b4502c76950944831b8c7?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
            className="shrink-0 my-auto max-w-full aspect-[2.63] w-[154px]"
          />
        </div>
      </div>
      <div className="flex flex-col p-5 mt-4 w-full bg-white rounded-2xl">
        <div className="text-xl font-bold leading-7 text-zinc-700">Revenue</div>
        <div className="flex gap-5 justify-between px-4 py-2 mt-4 rounded-xl border border-solid shadow-2xl border-zinc-100">
          <div className="flex flex-col justify-center my-auto">
            <div className="text-lg font-semibold leading-6 text-zinc-700">
              $4,000
            </div>
            <div className="text-xs tracking-normal leading-4 text-neutral-400">
              Recently Added Pages
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/88d2f6f2b985b082f85a7f6448d5fd4658d11b4c1e581d0f42a64a749a915c80?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
            className="shrink-0 w-12 aspect-square"
          />
        </div>
        <div className="flex gap-5 justify-between px-4 py-2 mt-3 rounded-xl border border-solid shadow-2xl border-zinc-100">
          <div className="flex flex-col justify-center my-auto">
            <div className="text-lg font-semibold leading-6 text-zinc-700">
              $2,120
            </div>
            <div className="text-xs tracking-normal leading-4 text-neutral-400">
              Video Monetization
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/947aea081375b2c7fea2c51484992bdf5feadf033fa8f01718f6e61f535a29c3?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
            className="shrink-0 w-12 aspect-square"
          />
        </div>
        <div className="flex gap-5 justify-between px-4 py-2 mt-3 rounded-xl border border-solid shadow-2xl border-zinc-100">
          <div className="flex flex-col justify-center my-auto">
            <div className="text-lg font-semibold leading-6 text-zinc-700">
              $1,752
            </div>
            <div className="text-xs tracking-normal leading-4 text-neutral-400">
              Community Buildup
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/102894561776590bbe56f3481bd09e3f7a396720a52526cd34170b05b949c66c?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
            className="shrink-0 w-12 aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-col p-5 mt-4 w-full bg-white rounded-2xl">
        <div className="text-xl font-bold leading-7 text-zinc-700">
          Trending News
        </div>
        <div className="flex gap-2 p-3 mt-4 bg-white rounded-xl border border-solid border-zinc-100">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e52ea3a213c60b9a9e21f13839ff20144557bf7379ca6cd826727d88f8def4d?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e52ea3a213c60b9a9e21f13839ff20144557bf7379ca6cd826727d88f8def4d?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e52ea3a213c60b9a9e21f13839ff20144557bf7379ca6cd826727d88f8def4d?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e52ea3a213c60b9a9e21f13839ff20144557bf7379ca6cd826727d88f8def4d?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e52ea3a213c60b9a9e21f13839ff20144557bf7379ca6cd826727d88f8def4d?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e52ea3a213c60b9a9e21f13839ff20144557bf7379ca6cd826727d88f8def4d?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e52ea3a213c60b9a9e21f13839ff20144557bf7379ca6cd826727d88f8def4d?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e52ea3a213c60b9a9e21f13839ff20144557bf7379ca6cd826727d88f8def4d?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
            className="shrink-0 w-12 aspect-square"
          />
          <div className="flex flex-col flex-1 my-auto">
            <div className="text-sm font-semibold text-zinc-700">
              Russia & Ukraine War
            </div>
            <div className="text-xs font-light leading-4 text-zinc-500">
              Marketing is evolving. Its chang...
            </div>
          </div>
        </div>
        <div className="flex gap-2 p-3 mt-3 bg-white rounded-xl border border-solid border-zinc-100">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/886b231d5671fcc37e2bf23f96ff60658a689b1cba415d1b365cd83b25a3417e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/886b231d5671fcc37e2bf23f96ff60658a689b1cba415d1b365cd83b25a3417e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/886b231d5671fcc37e2bf23f96ff60658a689b1cba415d1b365cd83b25a3417e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/886b231d5671fcc37e2bf23f96ff60658a689b1cba415d1b365cd83b25a3417e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/886b231d5671fcc37e2bf23f96ff60658a689b1cba415d1b365cd83b25a3417e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/886b231d5671fcc37e2bf23f96ff60658a689b1cba415d1b365cd83b25a3417e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/886b231d5671fcc37e2bf23f96ff60658a689b1cba415d1b365cd83b25a3417e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/886b231d5671fcc37e2bf23f96ff60658a689b1cba415d1b365cd83b25a3417e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
            className="shrink-0 w-12 aspect-square"
          />
          <div className="flex flex-col flex-1 my-auto">
            <div className="text-sm font-semibold text-zinc-700">
              Elon Musk bought Twitter
            </div>
            <div className="text-xs font-light leading-4 text-zinc-500">
              Twitter is the most useful social pl...
            </div>
          </div>
        </div>
        <div className="flex gap-2 p-3 mt-3 bg-white rounded-xl border border-solid border-zinc-100">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6b0f82da0f9e6d48f33f47751d1517645c3e47025679f0d6bc55d2680d8b032e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b0f82da0f9e6d48f33f47751d1517645c3e47025679f0d6bc55d2680d8b032e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b0f82da0f9e6d48f33f47751d1517645c3e47025679f0d6bc55d2680d8b032e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b0f82da0f9e6d48f33f47751d1517645c3e47025679f0d6bc55d2680d8b032e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b0f82da0f9e6d48f33f47751d1517645c3e47025679f0d6bc55d2680d8b032e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b0f82da0f9e6d48f33f47751d1517645c3e47025679f0d6bc55d2680d8b032e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b0f82da0f9e6d48f33f47751d1517645c3e47025679f0d6bc55d2680d8b032e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b0f82da0f9e6d48f33f47751d1517645c3e47025679f0d6bc55d2680d8b032e?apiKey=5ad4cb6eda3c4717b3989f3a78087890&"
            className="shrink-0 w-12 aspect-square"
          />
          <div className="flex flex-col flex-1 my-auto">
            <div className="text-sm font-semibold text-zinc-700">
              Fuel Crisis Everywhere
            </div>
            <div className="text-xs font-light leading-4 text-zinc-500">
              Due to covid situation in 2020 the...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarRight;