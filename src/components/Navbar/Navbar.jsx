const Navbar = () => {
  return (
    <nav className="bg-green-500 w-full mx-auto flex items-center justify-between p-4 px-6">
      <div className="text-white text-lg">
        <span className="text-black text-2xl">&lt;</span>Jumbo{" "}
        <span className="text-black text-2xl">Lock/&gt;</span>
      </div>
      <div className="flex items-center justify-center gap-4 text-white text-lg">
        <a
          href="https://github.com/snapepotter20/Password-Manager-LocalStorage"
          target="_blank"
          className="flex items-center justify-center gap-2 p-2 text-white text-lg hover:bg-white hover:rounded-3xl hover:text-green-600"
        >
          <img src="/github.png" alt="github" />
          <span>Github</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
