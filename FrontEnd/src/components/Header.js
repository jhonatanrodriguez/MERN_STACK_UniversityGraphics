import React from "react";
import {Link} from "react-router-dom";
function Header(){
    return(
        <div class="flex flex-row items-center justify-center bg-blue-700 h-[60px] w-100">
            <ul class="flex flex-row items-center justify-center h-[80px] w-100 m-5 text-white">
                <li class="m-5">
                    <Link to={"/"}>Datos</Link>
                </li>
                <li>
                    <Link to={"/visual"}> Graficos</Link>
                </li>
            </ul>
        </div>
    )
}
export default Header;