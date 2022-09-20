import { MenuData } from "../data/MenuData";

export default function NavBar() {
  return (
    <nav>
      <h1>Q and Sons</h1>
      <ul>
        {MenuData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <a href={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
