import { Route, Routes } from "react-router"
import Home from "./Home"
import adventInfo from '../assets/avent-list'

export default function Main () {
    console.log(adventInfo)
    return (
        <div>
            <h1>Hello World</h1>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}