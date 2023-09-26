import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="absolute bottom-0 left-0 right-0 text-center">
        <div className="flex justify-between px-5 items-center">
        <small className="text-[11px] text-zinc-600">
          Made with &hearts; by JosephV
        </small>
        <a
          href="https://github.com/itsJosephV/tasks-manager"
          target="_blank"
          className="text-[12px] text-end font-mono text-zinc-500 underline underline-offset-2 decoration-zinc-500 hover:decoration-zinc-200 hover:text-zinc-200 cursor-pointer"
        >
          Source
        </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
