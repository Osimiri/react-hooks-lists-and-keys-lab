function NavBar() {

const links = ["home", "about", "projects"];
const linkBits = links.map((link) => {
  return <a key = {link} href={`#${link}`}>{link}</a>
  })
console.log(linkBits);
 return (
  <nav>
    {linkBits} 
  </nav>);
}

export default NavBar;
 
//  return <nav>
//     <a key = {links [0]} href="#home">home</a>
//     <a href="#about">about</a>
//     <a href="#projects">projects</a>
//   </nav>;
// }