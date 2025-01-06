import { settings } from '../settings';
// importação dos ícones
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function SearchPopUp ({ activeIndex, hidden }) {
  return (
    <div className="SearchPopUp" style={!hidden ? { display: "none" } : undefined}>
      <div className="header">
        <IoIosArrowBack />
        <input
          type="text"
          placeholder={settings.groups[activeIndex].placeholderMessage}/>
        <IoIosSearch />
      </div>
      
      <ul className="suggestions">
        <li>
          <img src="" alt="photo" />
          <span>Perto</span>
        </li>
        {
          <li>
            <img src="" alt="photo" />
            <span>Perto</span>
          </li>
        }
      </ul>
    </div>
  )
}