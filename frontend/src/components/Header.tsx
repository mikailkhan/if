import Logo from "../assets/logo2.svg?react";

const Header = () => {
  return (
    <header className="flex justify-between bg-primary border-b-2 border-gray-200">
      <div className="">
        <Logo width="300" />
      </div>

      <nav className="my-auto text-md">
        <ul className="flex gap-3 mx-6 p-2 text-white">
          <li>
            <a
              href="#"
              className="hover:text-gray-100 underline-offset-4 hover:underline transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-100 underline-offset-4 hover:underline transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-100 underline-offset-4 hover:underline transition duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-100 underline-offset-4 hover:underline transition duration-300"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
