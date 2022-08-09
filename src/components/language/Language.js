import React from 'react'

export const Language = ({language}) => {
    return ( <div class='m-16 p-4 md:p-16 w-4/5 mx-auto shadow-lg border border-gray-50 bg-white rounded-full'>
        <h1 class='text-xl md:text-3xl text-left font-semibold mb-3'>Languages</h1>
        <p class='text-xl md:text-2xl text-left font-semibold mb-2'>Spanish - Native Speaker</p>
            <div class="w-full bg-gray-200 h-1">
                <div class="bg-blue-600 h-1" style={{ width: "100%" }}></div>
            </div>
        <p class='text-xl md:text-2xl text-left font-semibold mb-2'>English - Advance (C1)</p>
            <div class="w-full bg-gray-200 h-1">
                <div class="bg-blue-600 h-1" style={{ width: "83%" }}></div>
            </div>
        <p class='text-xl md:text-2xl text-left font-semibold mb-2'>German - Beginner (A1)</p>
            <div class="w-full bg-gray-200 h-1">
                <div class="bg-blue-600 h-1" style={{ width: "17%" }}></div>
            </div>
    </div>
    )
}
