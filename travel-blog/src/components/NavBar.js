const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='title'>
        <a href='/'>
          <h1>Travelize</h1>
        </a>
        <p>My traveling experiences</p>
      </div>
      <ul className='navigation-links'>
        <a href='/'>Home</a>
        <a href='/blog'>Blog</a>
        <button href='/about' className='about-button'>
          About
        </button>
      </ul>
    </div>
  );
};

export default NavBar;
