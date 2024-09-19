import styles from "./navigation.module.css"
const Navigation = () => {
  // console.log(styles);
  
  return (
    <nav className= {`${styles.navigation} container`}>
        <div className="logo">
            <img src="/src/images/icon.png" alt="icon logo" />
            </div>
            <ul>
                <li>home </li>
                <li>About </li>
                <li>Contact </li>
                
            </ul>
        
    </nav>
  );
}

export default Navigation;