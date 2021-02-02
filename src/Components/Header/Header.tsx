import React, {useState} from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';





const Header = () => {
  const [open, setOpen] = useState(false);
  const noDisplayContents = {
    transform: 'translateX(-100%)'
  }
  const displayContents = {
    transform: 'translateX(0%)',
  }

  return (
    <div>
      <header className = {styles.header}>
        <div>
          <h1>Movie DB</h1>
        </div>
        <div  className = {styles.menuIconContainer}>
          <FontAwesomeIcon size='2x' onClick={() => setOpen(!open)} icon={open === true ?  faTimes : faBars}  className={styles.menuIcon} /> 
          <p>Filter</p>
        </div>
      </header>
      <section>
        <div  style={open === true ? displayContents : noDisplayContents}  className = {styles.burgerMenuList}>
          <h2>Filters</h2>
            <ul>
            <div>
                <li>Top rated</li>
                <input type="radio" name="filter" id=""/>
              </div>
              <div>
                <li>Now in cinema</li>
                <input type="radio" name="filter" id=""/>
              </div>
              
            </ul>
        </div>
      </section>

    </div>
  );
};

export default Header;
