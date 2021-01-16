import './App.css';
import Header from './component/Header'
import Accessories from './assets/Desktop-Accessories.jpg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'
import Item from './component/Item'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_itemContainer">
          <Item
            title="Lowest Cost Solar Panels in America"
            desc="Money-back guarantee"
            descLink=""
            backgroundImage={SolarPanels}
            leftBtnText="ORDER NOW"
            leftBtnLink=""
            rightBtnText="LEARN MORE"
            rightBtnLink=""
            twoButton='true'
            first
           />
          <Item
            title="Model S"
            desc="Starting at $69,420"
            descLink=""
            backgroundImage={ModelS}
            leftBtnText="CUSTIM ORDER"
            leftBtnLink=""
            rightBtnText="EXISTING INVENTORY"
            rightBtnLink=""
            twoButton='true'
           />
          <Item
            title="Model 3"
            desc="Order Online for Touchless Delivery"
            descLink=""
            backgroundImage={Model3}
            leftBtnText="CUSTIM ORDER"
            leftBtnLink=""
            rightBtnText="EXISTING INVENTORY"
            rightBtnLink=""
            twoButton='true'
           />
          <Item
            title="Model X"
            desc="Order Online for Touchless Delivery"
            descLink=""
            backgroundImage={ModelX}
            leftBtnText="CUSTIM ORDER"
            leftBtnLink=""
            rightBtnText="EXISTING INVENTORY"
            rightBtnLink=""
            twoButton='true'
           />
          <Item
            title="Model Y"
            desc="Order Online for Touchless Delivery"
            descLink=""
            backgroundImage={ModelY}
            leftBtnText="CUSTIM ORDER"
            leftBtnLink=""
            rightBtnText="EXISTING INVENTORY"
            rightBtnLink=""
            twoButton='true'
           />
          <Item
            title="Solar for New Roofs"
            desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            descLink=""
            backgroundImage={SolarRoof}
            leftBtnText="ORDER NOW"
            leftBtnLink=""
            rightBtnText="LEARN MORE"
            rightBtnLink=""
            twoButton='true'
           />
          <Item
            title="Accessories"
            desc=""
            descLink=""
            backgroundImage={Accessories}
            leftBtnText="SHOP NOW"
            leftBtnLink=""
            rightBtnText="LEARN MORE"
            rightBtnLink=""
            twoButton='true'
           />

      </div>
    </div>
  );
}

export default App;
