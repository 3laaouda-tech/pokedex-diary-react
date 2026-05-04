export default function Footer() {

  const NAV = [
    { title: "Explore", links: ["National Pokédex", "Advanced Search", "Browse by Type", "Browse by Generation", "Legendary Pokémon"] },
    { title: "Resources", links: ["Type Chart", "Abilities List", "Move Dex", "Item Database", "Location Guide"] },
    { title: "Generations", links: ["Gen I — Kanto", "Gen II — Johto", "Gen III — Hoenn", "Gen IV — Sinnoh", "Gen IX — Paldea"] },
  ];


  return (
    <footer className='footer'>
      <div className='footer-wrapper container'>
        <div className='footer-grid'>

          <div className='footer-col'>
            <h2 className='col-title'>Pokédex</h2>
            <p className="text-dex-muted text-sm leading-relaxed mb-5 max-w-xs">
              Your complete guide to all Pokémon species — stats, evolutions,
              type matchups, and more. Gotta catch 'em all!
            </p>
          </div>


          {NAV.map((col) => (
            <div className='footer-col' key={col.title}>
              <h2 className='col-title'>{col.title}</h2>
              <ul className='footer-nav'>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className='footer-link'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}


        </div>

        <div className='footer-bottom'>
          <p className='footer-copy'>
            © 2026 Pokédex Project — Pokémon &amp; all related names are trademarks of Nintendo / Game Freak.
          </p>
          <div className='footer-legal'>
            {["Privacy Policy", "Terms of Use", "Contact"].map((l) => (
              <a key={l} href="#" className='footer-legal-link'>
                {l}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}