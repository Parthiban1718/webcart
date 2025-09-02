
import Template from "./Template";
import { productData } from "../datas/ProductData";
import { useState } from "react";

export default function Fruits() {
  const fruits = productData.filter((p) => p.category === "fruits");
  const [headercount, setheadercount] = useState(0);
  const [popupstatus, setpopupstatus] = useState(false);

  return (
    <Template
      customProducts={fruits}
      sendHeadercount={setheadercount}
      showPopup={popupstatus}
      closePopup={() => setpopupstatus(false)}
    />
  );
}






