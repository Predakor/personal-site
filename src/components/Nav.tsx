function Nav({}) {
  return (
    <nav class={'fixed z-50 w-full p-4 text-2xl'}>
      <ul class={'flex justify-end gap-4'}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
