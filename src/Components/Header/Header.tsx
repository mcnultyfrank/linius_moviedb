import React, {useState} from "react";
import styles from "./Header.module.scss";
import movieImg from "../../movies.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';





const Header = (props: any) => {
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
          <h1>Movies <span>DB</span></h1>
        </div>
        <div  className = {styles.menuIconContainer}>
          <FontAwesomeIcon size='2x' onClick={() => setOpen(!open)} icon={open === true ?  faTimes : faBars}  className={styles.menuIcon} /> 
          <p>Filter</p>
        </div>
      </header>
        <head>
          
        </head>
      <section>
        <div  style={open === true ? displayContents : noDisplayContents}  className = {styles.burgerMenuList}>
            <ul>
            <div>
                {/* <li>Top rated</li> */}
                <label htmlFor="top_rated">Top rated</label>
                <input onClick = {() => props.updateFilter('top_rated')} type="radio" name="filter" id="top_rated"/>
              </div>
              <div>
                <label htmlFor="now_playing">Now playing</label>
                <input  onClick = {() => props.updateFilter('now_playing')}  type="radio" name="filter" id="now_playing"/>
              </div>
              
            </ul>
        </div>
      </section>

    </div>
  );
};

export default Header;
