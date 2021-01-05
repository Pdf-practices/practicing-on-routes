import React, { useEffect } from "react";
import { Button } from "../components/button";
import { useInfo } from "../context/addInfo.context";

const Home = () => {
   const { info, addInfo, removeInfoItem } = useInfo();

   const david = ["1", "Alert lorem ipsum"];

   // useEffect(() => {
   //    removeInfoItem();
   // }, []);

   return (
      <div>
         <Button onClick={() => addInfo(david)}>Adding</Button>
         <Button onClick={removeInfoItem}>Remove</Button>
         <br />
         <div>
            {info.map((item, index) => (
               <div key={index}>
                  <h3>{item[0]}</h3>
                  <p>{item[1]}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Home;
