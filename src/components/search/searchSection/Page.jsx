import { useState } from "react";
// importação dos ícones
import { IoIosSearch } from "react-icons/io";
// importação das definições de pesquisas
import { settings } from "../settings";
// importação do pop-up de pesquisa
import SearchPopUp from "../searchPopUp/Page";

export default function SearchSection() {
  // Estado para armazenar o índice do ícone ativado
  const [activeIndex, setActiveIndex] = useState(0);
  const [PopUpStatus, setPopUpStatus] = useState(false);

  return (
    <div className="containerSearchSection">
      <SearchPopUp hidden={PopUpStatus} activeIndex={activeIndex}/>
      <ul className="smartSearch">
        {
          settings.groups.map((item, index) => {
            return (
              <li 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={activeIndex === index ? "active" : ""}
              >
                {activeIndex === index ? item.iconActived : item.icon}
                <span>{item.label}</span>
              </li>
            );
          })
        }
      </ul>

      <div className="searchBox">
        <div className="searchField">
          <IoIosSearch />
          <input
            type="text"
            placeholder={settings.groups[activeIndex].placeholderMessage}
            onFocus={() => setPopUpStatus(!PopUpStatus)}
          />
        </div>
        <button>Pesquisar</button>
      </div>

    </div>
  );
}
