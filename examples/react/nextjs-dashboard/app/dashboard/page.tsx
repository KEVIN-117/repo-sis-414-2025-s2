"use client"
import React, { useState } from 'react'
import Button from '../components/Button'

function DashboardPage() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>DashboardPage</h1>
            <p>Count: {count}</p>
            <Button setCount={setCount} count={count} buttonColor='success' buttonSize='large' />
        </div>
    )
}

export default DashboardPage