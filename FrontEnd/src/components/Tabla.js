import React from "react";
import Header from "./Header";
import { useState } from "react";
import foto from './sombrero.png';
function Tabla() {
    const [data, setData] = useState([]);
    const [pais, setPais] = useState('');
    const searchUniversidades = async (e) => {
        e.preventDefault();
        const url = `http://localhost:9000/buscar/${pais}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
            <Header />
            <div class="flex flex-col items-center justify-center">
                <div class="flex justify-center h-10 items-center font-semibold text-black">
                    <h1 class="text-xl m-4 font-medium">TOP 10 UNIVERSIDADES</h1>
                </div>
                <form onSubmit={searchUniversidades} class="flex flex-col items-center justify-center m-2">
                    <input class="rounded-lg bg-white text-black w-[400px] p-4 rounded-lg text-lg border-blue-100 border-2 
                            m-2" type="text" name="pais" value={pais} onChange={(e) => setPais(e.target.value)} placeholder="Nombre Pais"></input>
                    <button class="bg-blue-700 hover:bg-blue-600 text-white w-[400px] p-4 rounded-lg font-semibold text-lg" type="submit">Search</button>
                </form>
                <div class="flex flex-wrap justify-center items-center w-full m-4">
                    {data.map(dato => (
                        <div class="w-[230px] h-[340px] rounded-lg shadow-lg flex flex-col m-2">
                            <div class="h-[78%] w-[230px] p-2 hover:bg-blue-50">
                                <img src={foto}/>
                                <h3>{dato.name} </h3>
                                <div class="text-gray-400 font-semibold text-sm">
                                    <p>{dato.country}</p>
                                    <p class="font-light">{dato.alpha_two_code}</p>
                                </div>
                            </div>
                            <div class=" bg-blue-700  h-[22%] text-white w-[230px] rounded-br-lg rounded-bl-lg
                             flex flex-col p-2 justify-end text text-tight">
                                <p><small>{dato.domains} </small></p>
                                <p><small>{dato.web_pages} </small></p>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
        <div class="flex flex-row w-full border-2 rounded-lg border-double p-4 mt-2">
                    <table class="w-screen text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-center text-white uppercase bg-blue-700">
                            <tr>
                                <th scope="col" class="">Universidad</th>
                                <th scope="col" class="">web pages</th>
                                <th scope="col" class="">Alpha two code</th> 
                                <th scope="col" class="">Domains</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item) => {
                                return (
                                    <tr key={item.id} class="hover:bg-blue-200 text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <td >{item.name} </td>
                                        <td class="">{item.web_pages} </td>
                                        <td class="">{item.alpha_two_code}</td>
                                        <td class="">{item.domains}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
        </>
    )
}
export default Tabla;
