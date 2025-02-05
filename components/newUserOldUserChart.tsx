'use client'
import { Legend,Tooltip,ResponsiveContainer, XAxis, YAxis, CartesianGrid, Line, LineChart } from "recharts"
import React from 'react'
import { date } from "zod"

const data = [
    { value: 12, value2:10, date: "2024-12-12" },
    { value: 17, value2:15,date: "2024-12-20" },
    { value: 25, value2:20,date: "2024-12-28" },
]
const data2 = [

]

function newUserOldUserChart() {
    return (
        <div className="flex justify-center items-center p-8">
            <ResponsiveContainer width="100%" height={340}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey='date' />
                    <YAxis />
                    <Tooltip/>
                    <Legend verticalAlign="top"/>
                    <Line name='new patient' dataKey="value" type="monotone" />
                    <Line name='old patient' dataKey="value2" type="monotone" stroke="#82ca9d"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default newUserOldUserChart
