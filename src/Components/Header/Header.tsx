import React, {useState, useEffect} from "react";
import styles from "./Header.module.scss";
import movieImg from "../../movies.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSearch, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import firebase, {provider} from "../../firebase.js"



const Header = (props: any) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  
  const noDisplayContents = {
    transform: 'translateY(-160%)',
    display: '0'
  }
  const displayContents = {
    transform: 'translateY(0%)',
  }
  const signIn = () => firebase.auth().signInWithRedirect(provider);
  const signOut = () => firebase.auth().signOut();
  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        setUser(user)
        }
        else{
          setUser(null)
        }
    })
  }
  useEffect(() => {
    getUser();
  }, [])
  return (
    <div>
      <header className = {styles.header}>
        <div>
          <h1>Movies <span>DB</span></h1>
          <input type="search" name="" id="" placeholder="Search for movies" />
          <FontAwesomeIcon icon = {faSearch} />

        </div>
        <div  className = {styles.menuIconContainer}>
        <p>{user ? `Hi, ${user.displayName}` : 'Log In'}</p>
          <FontAwesomeIcon onClick = {user ? () => signOut() : () => signIn()} icon = {user ? faSignOutAlt : faSignInAlt} size='2x' className={styles.menuIcon} />
          <FontAwesomeIcon size='2x' onClick={() => setOpen(!open)} icon={open === true ?  faTimes : faBars}  className={styles.menuIcon} /> 
        </div>
      </header>
      <section>
        <div  style={open === true ? displayContents : noDisplayContents}  className = {styles.burgerMenuList}>
          <ul>
            <div>
                <label htmlFor="top_rated">Top rated</label>
                <input onClick = {() => props.updateFilter('top_rated')} type="radio" name="filter" id="top_rated"/>
              </div>
              <div>
                <label htmlFor="now_playing">Now playing</label>
                <input  onClick = {() => props.updateFilter('now_playing')}  type="radio" name="filter" id="now_playing"/>
              </div>
            </ul>
          <div className = {styles.navFooter}>

            <div className = {styles.navInfo}>
            <p>themoviedb.org</p>
            <p>T & C's</p>
            <p>Privacy Policy</p>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
