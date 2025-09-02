
import Template from "./Template";
import { productData } from "../datas/ProductData";
import { useState } from "react";

export default function Vegetables() {
  const vegetables = productData.filter((p) => p.category === "vegetables");
  const [headercount, setheadercount] = useState(0);
  const [popupstatus, setpopupstatus] = useState(false);

  return (
    <Template
      customProducts={vegetables}
      sendHeadercount={setheadercount}
      showPopup={popupstatus}
      closePopup={() => setpopupstatus(false)}
    />
  );
}






