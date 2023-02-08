//./utils/icons.js

import { FaPrayingHands, FaIndustry } from "react-icons/fa";
import { MdOutlineMuseum, MdMilitaryTech } from "react-icons/md";
import { GiFruitTree, GiTheaterCurtains, GiFamilyHouse, GiGreekTemple } from "react-icons/gi";
import { RiGovernmentLine } from "react-icons/ri";

export const Icons = {
  religious: <FaPrayingHands />,
  museum: <MdOutlineMuseum/>,
  garden: <GiFruitTree />,
  public: <RiGovernmentLine />,
  theater: <GiTheaterCurtains />,
  antiquity: <GiGreekTemple />,
  civil: <GiFamilyHouse />,
  industrial: <FaIndustry />,
  military: <MdMilitaryTech />
}
