<<<<<<< HEAD
import "styled-components";

 declare module "styled-components" {
   export interface DefaultTheme {}
   export interface DefaultTheme {
     red: string;
     black: {
       veryDark: string;
       darker: string;
       lighter: string;
     };
     white: {
       darker: string;
       lighter: string;
     };
   }
 } 
=======
import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        textColor: string;
        bgColor: string;
        accentColor: string;
    }
}
>>>>>>> b26985a (asdf)
