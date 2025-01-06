// importação dos ícones
import { PiHouse } from "react-icons/pi";
import { PiHouseFill } from "react-icons/pi";

import { RiHotelBedLine } from "react-icons/ri";
import { RiHotelBedFill } from "react-icons/ri";

import { IoTicketOutline } from "react-icons/io5";
import { IoTicket } from "react-icons/io5";

import { PiForkKnifeLight } from "react-icons/pi";
import { PiForkKnifeFill } from "react-icons/pi";

const settings = {
  groups: [
    {
      label: "Pesquisar Tudo",
      icon: <PiHouse />,
      iconActived: <PiHouseFill />,
      placeholderMessage: "Locais para visitar, atividades, hotéis..."
    },
    {
      label: "Hóteis",
      icon: <RiHotelBedLine />,
      iconActived: <RiHotelBedFill />,
      placeholderMessage: "Nome do hotel, resort ou destino"
    },
    {
      label: "Atividades",
      icon: <IoTicketOutline />,
      iconActived: <IoTicket />,
      placeholderMessage: "Atração, atividade ou destino"
    },
    {
      label: "Restaurantes",
      icon: <PiForkKnifeLight />,
      iconActived: <PiForkKnifeFill />,
      placeholderMessage: "Restaurante ou destino"
    },
  ],
};

export { settings };