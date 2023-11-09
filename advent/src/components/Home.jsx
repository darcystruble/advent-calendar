import Day1To6 from "./Day1To6"
import Day7To12 from "./Day7To12"
import Day13To18 from "./Day13To18"
import Day19To24 from "./Day19To24"
import '../styles/grid.css'

export default function Home () {
    return (
        <div>
            <div className="all-advent-outer">
                <Day1To6 />
                <Day7To12 />
                <Day13To18 />
                <Day19To24 />
            </div>
        </div>
    )
}