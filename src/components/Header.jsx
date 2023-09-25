import React from 'react'

const Header = ({handleOnBlurSubmit, handleKeySubmit, setUsername, username}) => {

  return (
    <div className="mb-4 flex flex-row justify-between">
    <h1 className="text-3xl font-semibold flex flex-row items-center gap-2">
      Hello
      <span>
        <form onSubmit={handleKeySubmit}>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            type="text"
            placeholder="You"
            className="input input-ghost w-auto max-w-xs text-3xl pl-0"
            onBlur={handleOnBlurSubmit}
          />
        </form>
      </span>
    </h1>
    <div className="flex flex-col">
      <a
        href="https://github.com/itsJosephV/tasks-manager"
        target="_blank"
        className="text-[14px] text-end font-mono text-zinc-300 underline underline-offset-2 decoration-zinc-500 hover:decoration-zinc-200 cursor-pointer"
      >
        Source
      </a>
      <a
        href="https://github.com/itsJosephV"
        target="_blank"
        className="text-[14px] text-end font-mono text-zinc-300 underline underline-offset-2 decoration-zinc-500 hover:decoration-zinc-200 cursor-pointer"
      >
        Portfolio
      </a>
    </div>
  </div>
  )
}

export default Header