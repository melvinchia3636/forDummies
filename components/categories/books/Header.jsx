import React from 'react'

function Header({ header: { image, title, description } }) {
  return (
    <div
      className="mt-16 flex flex-col px-20 justify-center w-full h-[32rem] overflow-hidden bg-cover bg-center bg-black bg-blend-darken bg-opacity-50"
      style={{
        backgroundImage: `url('${image.src}')`,
      }}
    >
      <h1 className="text-white w-1/2 text-5xl font-semibold leading-snug">
        {title} Books
      </h1>
      <p className="text-white w-7/12 mt-6 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default Header