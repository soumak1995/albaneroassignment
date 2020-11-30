import React,{useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import {data} from '../dummyDataGraph'
import '../css/graph.css'
function Graph() {
    return (
        <div className="graph__Container">
            <div >
            <h2>Graph</h2>
            <Line  data={data} />
        </div>
        </div>
        
    )
}

export default Graph
