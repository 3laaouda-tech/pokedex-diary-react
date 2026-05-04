export default function Header() {
  return (
    <header className='header'>
      <div className='header-wrapper container'>
        <div className='header-logo'>
          Pokédex Diary
        </div>
        <nav className='header-nav'>
          <a href="/">Home</a>
          <a href="/favorites">Favorites</a>
        </nav>
      </div>
    </header>


  )
}