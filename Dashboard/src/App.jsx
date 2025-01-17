import "./App.css"
import DashboardWrapper from "./components/DashboardWrapper"
import Summaries from "./components/Summaries"
import Revenue from "./components/Revenue"
import BestCrops from "./components/BestCrops"
import Farmers from "./components/Farmers"
import PSS_Check from "./components/PSS_Check"
import { Route, Routes } from 'react-router-dom'

function App() {
  
  return (
      <DashboardWrapper contentClassName={`dashboard__content`}>
        <div className="components__row r-1">
        <Summaries/>
        <Revenue/>
        </div>

        

        <div className="components__row r-2">
        <BestCrops/>
        <Farmers/>
        </div>

        <div className="components__row r-3">
          <PSS_Check/>

        </div>

      </DashboardWrapper>
  )
}

export default App