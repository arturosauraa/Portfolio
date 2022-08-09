import React from 'react'

export const Skill = ({skill}) => {
    return ( 
    <div class='m-10 p-20 md:p-50 w-4/5 mx-auto shadow-lg border rounded-full border-gray-50 bg-white'>
        <h1 class='text-xl md:text-3xl text-left font-semibold mb-2'>Skills</h1>
        <p class='text-xl md:text-1xl text-left font-semibold mb-2'>Java - 2 years expierence</p>
            <div class="w-full bg-gray-200 h-1">
                <div class="bg-blue-600 h-1" style={{ width: "40%" }}></div>
            </div>
        <p class='text-xl md:text-1xl text-left font-semibold mb-2'>SQL - 1 year expierence</p>
            <div class="w-full bg-gray-200 h-1">
                <div class="bg-blue-600 h-1" style={{ width: "30%" }}></div>
            </div>
        <p class='text-xl md:text-1xl text-left font-semibold mb-2'>JavaScript - entry Level</p>
            <div class="w-full bg-gray-200 h-1">
                <div class="bg-blue-600 h-1" style={{ width: "17%" }}></div>
            </div>
        <p class='text-xl md:text-1xl text-left font-semibold mb-2'>HTML 5 - 1 year epierence</p>
            <div class="w-full bg-gray-200 h-1">
                <div class="bg-blue-600 h-1" style={{ width: "35%" }}></div>
            </div>
        <p class='text-xl md:text-1xl text-left font-semibold mb-2'>CSS - 1 year expierence</p>
            <div class="w-full bg-gray-200 h-1">
                <div class="bg-blue-600 h-1" style={{ width: "30%" }}></div>
            </div>
        <p class='text-xl md:text-1xl text-left font-semibold mb-2'>Bash - entry level</p>
            <div class="w-full bg-gray-200 h-1">
                <div class="bg-blue-600 h-1" style={{ width: "15%" }}></div>
            </div>
            <p class='text-xl md:text-1xl text-left font-semibold mb-2'>MS Office - 1 year epierence</p>
            <div class="w-full bg-gray-200 h-1">
                <div class="bg-blue-600 h-1" style={{ width: "30%" }}></div>
            </div>
    </div>
    )
}