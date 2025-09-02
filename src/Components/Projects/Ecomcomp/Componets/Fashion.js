
import Template from "./Template";
import { productData } from "../datas/ProductData";
import { useState } from "react";

export default function Fashion() {
  const fashion = productData.filter((p) => p.category === "fashion");
  const [headercount, setheadercount] = useState(0);
  const [popupstatus, setpopupstatus] = useState(false);

  return (
    <Template
      customProducts={fashion}
      sendHeadercount={setheadercount}
      showPopup={popupstatus}
      closePopup={() => setpopupstatus(false)}
    />
  );
}

