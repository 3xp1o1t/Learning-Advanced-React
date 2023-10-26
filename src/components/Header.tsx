interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="flex justify-between p-4 bg-sky-200">
      <h1 className="text-xl font-extrabold text-sky-700 pl-6">{title}</h1>
      <Navbar />
    </header>
  );
};

export default Header;

export const Navbar = () => {
  return (
    <nav className="pr-8">
      <ul className="flex gap-12 font-semibold">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
