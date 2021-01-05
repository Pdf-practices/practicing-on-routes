import { remove } from "lodash";
import { ButtonHTMLAttributes } from "react";

interface ButtonI extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: any;
}

export const Button = (props: ButtonI) => {
   const { children } = props;

   return (
      <>
         <button {...props}>{children}</button>
      </>
   );
};
