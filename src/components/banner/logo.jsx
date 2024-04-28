// eslint-disable-next-line no-unused-vars
import React from 'react'

import logo from "../../assets/image/Group.png";

function Logo() {
  return (
    <div className="flex gap-2 self-start mt-4 text-2xl font-semibold leading-8 whitespace-nowrap text-zinc-700">
    <img
      loading="lazy"
      src={logo}
      className="shrink-0 aspect-[0.86] w-[31px]"
    />
    <div>Buddy</div>
  </div>
  )
}

export default Logo;