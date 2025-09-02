
import Template from "./Template";
import { productData } from "../datas/ProductData";
import { useState } from "react";

export default function Electronic() {
  const electronic = productData.filter((p) => p.category === "electronic");
  const [headercount, setheadercount] = useState(0);
  const [popupstatus, setpopupstatus] = useState(false);

  return (
    <Template
      customProducts={electronic}
      sendHeadercount={setheadercount}
      showPopup={popupstatus}
      closePopup={() => setpopupstatus(false)}
    />
  );
}

