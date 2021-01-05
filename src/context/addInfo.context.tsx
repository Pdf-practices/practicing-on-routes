import React, { createContext, useContext, useState } from "react";
import { filter, entries, first } from "lodash";
import { clear } from "console";

interface InfoInterface {
   info: string[];
   setInfo?: any;
   addInfo: (data: any) => any;
   removeInfoItem: () => void;
}

const InfoContext = createContext({} as InfoInterface);

export const InfoProvider = ({ children }: any) => {
   const [info, setInfo] = useState<Array<string>>([]);

   let aux;

   const addInfo = (data: any) => {
      aux = [...info, data];

      setInfo(aux);
   };

   // const removeTime = () => {
   //    let time = setInterval(() => {
   //       if (info.length <= 0) {
   //          // clearInterval(time);
   //       } else {
   //       }
   //       // removeInfoItem();
   //    }, 5000);
   // };

   const removeInfoItem = () => {
      let aux1 = [...info];

      let eliminate: any;

      if (aux1.length >= 0) {
         eliminate = aux1.shift();
         // let time = setInterval(() => {

         //    if (aux1.length <= 0) {
         //       clearInterval(time);
         //    }
         // }, 5000);

         console.log(eliminate);
         setInfo(aux1);
      }
   };

   const value = {
      info,
      setInfo,
      addInfo,
      removeInfoItem,
   };

   return <InfoContext.Provider value={value}>{children}</InfoContext.Provider>;
};

export const useInfo = () => {
   const { info, setInfo, addInfo, removeInfoItem } = useContext(InfoContext);
   return { info, setInfo, addInfo, removeInfoItem };
};
