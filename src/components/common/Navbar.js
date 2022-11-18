import '../../css/common.css';

export const Navbar = ({ username }) => {
  return (
    <nav className="navbar navbar-expand-sm nav-bar-custom m-2">
      <div className="container-fluid">
        <a className="navbar-brand" style={{color:'#d7e2de', fontSize:'25px'}} href="/">
          <img
            src="favicon.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />{" "}
          Accounts Central
        </a>
        <div id="section-left" className="collapse navbar-collapse">
          <ul className="navbar-nav fs-5">
            <li className="nav-item">
              <a className="nav-link active" style={{color:'#d7e2de', fontSize:'18px'}} aria-current="page" href="/Home">
                Overview
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" style={{color:'#d7e2de', fontSize:'18px'}} href="/Accounts">
                Accounts
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" style={{color:'#d7e2de', fontSize:'18px'}} href="/Offers">
                Offers
              </a>
            </li>

            <li className="nav-item">
              <a className="font-theme-light nav-link" style={{color:'#d7e2de', fontSize:'18px'}} href="/Investments">
                Investments
              </a>
            </li>
          </ul>
        </div>

        <div id="section-right">
          <ul className="navbar-nav fs-3">
            <li className="nav-item mx-1">
              <a className="nav-link bi bi-gear" style={{color:'#d7e2de'}} href="#">
              </a>
            </li>

            <li className="nav-item mx-1">
              <a className="nav-link bi bi-envelope" style={{color:'#d7e2de'}} href="#"></a>
            </li>

            <li className="nav-item mx-1">
              <a className="nav-link bi bi-bell" style={{color:'#d7e2de'}} href="#"></a>
            </li>

            <li className="nav-item dropdown-center mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{color:'#d7e2de'}}
              >
                <i className="bi bi-person-circle" style={{color:'#d7e2de'}}></i>
              </a>
              
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" style={{color:'#d7e2de'}} href="#">Logout</a>
                </li>
              </ul>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};
