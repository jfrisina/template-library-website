// NAVBAR -------------------------------------------------------------
import './Navbar.css'
// import { Link } from 'react-router-dom'
import libraryLogo from './../../assets/library-logo-dark.svg'
const Navbar = () => {
    return (
        <>
        <div class="usa-overlay"></div>
<header class="usa-header usa-header--basic usa-header--megamenu">
  <div class="usa-nav-container">
    <div class="usa-navbar">
      <div class="usa-logo">
        <em class="usa-logo__text"
          ><a href="/" title="<Project title>">&lt;Project title&gt;</a></em
        >
      </div>
      <button type="button" class="usa-menu-btn">Menu</button>
    </div>
    <nav aria-label="Primary navigation" class="usa-nav">
      <button type="button" class="usa-nav__close">
        <img src="../node_modules/@uswds/uswds/packages/usa-icon/src/img/usa-icons-bg/close--white.svg" role="img" alt="Close" />
      </button>
      <ul class="usa-nav__primary usa-accordion">
        <li class="usa-nav__primary-item">
          <button
            type="button"
            class="usa-accordion__button usa-nav__link usa-current"
            aria-expanded="false"
            aria-controls="basic-mega-nav-section-one"
          >
            <span>&lt;Current section&gt;</span>
          </button>
          <div
            id="basic-mega-nav-section-one"
            class="usa-nav__submenu usa-megamenu"
          >
            <div class="grid-row grid-gap-4">
              <div class="usa-col">
                <ul class="usa-nav__submenu-list">
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                </ul>
              </div>
              <div class="usa-col">
                <ul class="usa-nav__submenu-list">
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);"
                      >&lt;A very long navigation link that goes onto two
                      lines&gt;</a
                    >
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                </ul>
              </div>
              <div class="usa-col">
                <ul class="usa-nav__submenu-list">
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                </ul>
              </div>
              <div class="usa-col">
                <ul class="usa-nav__submenu-list">
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="usa-nav__primary-item">
          <button
            type="button"
            class="usa-accordion__button usa-nav__link"
            aria-expanded="false"
            aria-controls="basic-mega-nav-section-two"
          >
            <span>&lt;Section&gt;</span>
          </button>
          <div
            id="basic-mega-nav-section-two"
            class="usa-nav__submenu usa-megamenu"
          >
            <div class="grid-row grid-gap-4">
              <div class="usa-col">
                <ul class="usa-nav__submenu-list">
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                </ul>
              </div>
              <div class="usa-col">
                <ul class="usa-nav__submenu-list">
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);"
                      >&lt;A very long navigation link that goes onto two
                      lines&gt;</a
                    >
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                </ul>
              </div>
              <div class="usa-col">
                <ul class="usa-nav__submenu-list">
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                </ul>
              </div>
              <div class="usa-col">
                <ul class="usa-nav__submenu-list">
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                  <li class="usa-nav__submenu-item">
                    <a href="javascript:void(0);">&lt;Navigation link&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="usa-nav__primary-item">
          <a href="javascript:void(0);" class="usa-nav-link"
            >&lt;Simple link&gt;</a
          >
        </li>
      </ul>
      <section aria-label="Search component">
        <form class="usa-search usa-search--small" role="search">
          <label class="usa-sr-only" for="search-field">Search</label>
          <input
            class="usa-input"
            id="search-field"
            type="search"
            name="search"
          />
          <button class="usa-button" type="submit">
            <img
              src="../node_modules/@uswds/uswds/packages/usa-icon/src/img/usa-icons-bg/search--white.svg"
              class="usa-search__submit-icon"
              alt="Search"
            />
          </button>
        </form>
      </section>
    </nav>
  </div>
</header>
        </>
    )
}

// EXPORT NAVBAR ---------------------------------------------
export default Navbar


