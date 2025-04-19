
import React, { useCallback, useState, useEffect } from "react";
import { PieChart, Pie, Sector } from "recharts";
import Header from "./Header";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Rectangle, ResponsiveContainer, } from "recharts";
import { data2 } from "../data/CountryData";
import { WorldMap } from "react-svg-worldmap";

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, country, nombre, value, name, _id, count } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload._id}
            </text>
            <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle}
                endAngle={endAngle} fill={fill} />
            <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10} fill={fill} />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" >{`Cantidad: ${count}, ${_id}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};
export default function Graficos() {
    const[data, setData]= useState([]);
        useEffect(()=>{
            const fetchData = async ()=>{
                try {
                    const response = await fetch("http://localhost:9000/get");
                    const result = await response.json();
                    setData(result);
                } catch (err) {
                    console.error(err); 
                }
            }; fetchData();
        },[] );
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );
    return (
        <div>
            <Header />
            <div class="flex flex-col items-center justify-center">
                <h1 class="text-xl m-2 font-medium">LOS 15 PAISES CON MAS UNIVERSIDADES EN EL MUNDO</h1>
                <div class="flex flex-row items-center justify-center w-full">
                    <div class="flex flex-col items-center justify-center w-3/2 h-100 mt-2 mr-4 border-2 
                    rounded-lg border-double p-2">
                        <WorldMap color="blue" value-suffix="people" size="xl" data={data2} />
                    </div>
                    <div class="flex items-center justify-center border-2 rounded-lg border-double p-2">
                        <PieChart width={480} height={480}>
                            <Pie activeIndex={activeIndex} activeShape={renderActiveShape} data={data} cx={235} cy={235}
                                innerRadius={50} outerRadius={80} fill="blue" dataKey="count" onMouseEnter={onPieEnter} />
                        </PieChart>
                    </div>
                </div>
                <div class="flex flex-col items-center justify-center mt-2 w-[1200px] h-100 border-2 rounded-lg border-double">
                    <ResponsiveContainer width={1250} height={300}>
                        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5}}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="_id" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="blue" activeBar={<Rectangle fill="yellow" stroke="purple" />} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div class="flex flex-row w-full border-2 rounded-lg border-double p-8 mt-2">
                    <table class="w-screen text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-center text-white uppercase bg-blue-700 ">
                            <tr>
                                <th scope="col" class="">PAIS</th>
                                <th scope="col" class="">CANTIDAD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item) => {
                                return (
                                    <tr key={item.id} class="hover:bg-blue-200 text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <td >{item._id} </td>
                                        <td >{item.count} </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
        </div>
    );
}
