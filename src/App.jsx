import {useState} from 'react';
import './App.css';
import Header from './Componets/header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';

const [getData, setGetdata] = useState([])
const [inputSelect, setinputSelect] = useState('')
const [filterValue, setFilterValue] = useState([])
const [selectCategory, setSelectcategory] = useState('')
const [data, setData] = useState([
  {
 name: " Honda Car",
  type: "car",
  description: "i am selling my Honda car",
  price: 1200000,
  location: "karachi",
  imgSrc: 'https://cdn-ds.com/blogs-media/sites/82/2020/07/02180921/2020-Honda-Accord-Sport-Red-driving-down-road-in-front-of-rocky-background_o.jpg'
}, {
  name: "BMW Car",
  type: "car",
  description: "i am selling my car",
  price: 1200000,
  location: "karachi",
  imgSrc: 'https://assets.entrepreneur.com/content/3x2/2000/1632413884-BMW-.jpg'
},
{
  name: "Audii Car",
  type: "car",
  description: "i want to sell Audii Car",
  price: 1200000,
  location: "karachi",
  imgSrc: "https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXVkaXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"

},
{
  name: "Ferarri Car",
  type: "car",
  description: "Ferarri car selling",
  price: 1200000,
  location: "karachi",
  imgSrc: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"

},
{
  name: "Jaguar Car",
  type: "car",
  description: "i want to sell jaguar",
  price: 1200000,
  location: "karachi",
  imgSrc: "https://cache4.pakwheels.com/ad_pictures/5770/Slide_jaguar-xf-3-0-v6-premium-luxury-2009-57702984.jpg"

}
  , {
  name: "Mercedes Car",
  type: "car",
  description: "i am selling my Mercedes",
  price: 1200000,
  location: "karachi"
  ,
  imgSrc: "https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBiZW56fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
}
  , {
  name: "Heavy Bike",
  type: "bike",
  description: "Any one purchase my Heavy Bike",
  price: 200000,
  location: "karachi"
  ,
  imgSrc: "https://wallpaperaccess.com/full/1207571.jpg"
}, {
  name: "Kawasa Ninja",
  type: "bike",
  description: "selling my Ninja kawasaka",
  price: 180000,
  location: "karachi"
  ,
  imgSrc: "https://cdn.pixabay.com/photo/2021/04/19/05/12/kawasaki-ninja-h2r-6190256_640.jpg"
}
  , {
  name: "Honda 125",
  type: "bike",
  description: "i am selling my Honda 125",
  price: 120000,
  location: "karachi",
  imgSrc: "https://i.ytimg.com/vi/_GSW5dNaKZs/maxresdefault.jpg"
}
  , {
  name: "Yamaha 200",
  type: "bike",
  description: "i am selling my Bike",
  price: 116000,
  location: "karachi"
  ,
  imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdn2sJdiiiyI_lxDPn35uSL_Lg8-4PB-ZYt-sBSnhH-srWSg1W934n2p6WZ74My_bwDIE&usqp=CAU"
}
  , {
  name: "CD 70",
  type: "bike",
  description: "i want to sell my Bike",
  price: 1180000,
  location: "karachi"
  ,
  imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbwpPFtvHODR2nzSVCWUPkNEDGG0QCtj2cA&usqp=CAU"

}
  , {
  name: "Super Power",
  type: "bike",
  description: "i am selling my Bike",
  price: 114000,
  location: "karachi"
  ,
  imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMcDjvI09NIGvQCxi8aPsi5Vkqlrv7LRtueQ&usqp=CAU"
}, {
  name: "Electric Bicycle",
  type: "cycle",
  description: "i am selling my Bike",
  price: 114000,
  location: "karachi"
  ,
  imgSrc: "https://upload.wikimedia.org/wikipedia/commons/1/15/Fat_Tire_Bike_by_Ensey_Motorized_Bikes.jpg"
}
  , {
  name: "Shoes Bicycle",
  type: "cycle",
  description: "i am selling my Bike",
  price: 114000,
  location: "karachi"
  ,
  imgSrc: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/1/13892149-10154035116472886-4119016358340052719-n-1504211469.jpg"
}
  ,
{
  name: "Bicycle",
  type: "cycle",
  description: "i am selling my Bike",
  price: 114000,
  location: "karachi"
  ,
  imgSrc: "https://miro.medium.com/max/1400/0*SoJiF1qjQ0jksZ27.jpg"
}])




export default function App() {


  const filterData = (e) => {
    let getValue = (e.target.value);
    setSelectcategory(getValue)
    getValue == "category" ? setGetdata(data) : getFilterData = data.filter(x => { return x.type == getValue })
    setGetdata(getFilterData)

    const InputValue = (e) => {
      const getVal = e.target.value
      setinputSelect(getVal)

      const getFilterData = getData.filter(value => {
        return value.text.toLowerCase().includes(getVal.toLowerCase())
      })

      getVal == "" ? setFilterValue([]) : setFilterValue(getFilterData)
    }




    return (
      <div className="App">
        <div className="nav-bar" >


          <Tabs className="nav-bar" aria-label="disabled tabs example">
            <Grid item xs={6} md={4}>
              <div className="select">

                <select onChange={(e) => filterData(e)}
                  name="" id="">


                  <option value="category">Category</option>
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="cycle">Cycle</option>

                </select>

              </div>

            </Grid>
            <Grid item xs={6} md={8}>
              <div className="text">
                <TextField className="input" id="outlined-basic" onChange={(e) => InputValue(e)} label="Search Item" variant="outlined" />
                <Button variant="contained" className="search" onClick={filterData}  >Search</Button>
                <h1>Category {selectCategory}</h1>
              </div>



            </Grid>


          </Tabs>


        </div>





        <div className="display-product">

          {
            selectCategory === "" ? Data.map(
              item => {

                return <Header className="header" name={item.name}
                  type={item.type}
                  description={item.description}
                  price={item.price}
                  location={item.location}
                  imgSrc={item.imgSrc}
                />

              })
              :
              filterValue.length == 0 ?
                getData.map(
                  item => {
                    return <Header className="header" name={item.name}
                      type={item.type}
                      description={item.description}
                      price={item.price}
                      location={item.location}
                      imgSrc={item.imgSrc}
                    />

                  })
                :
                filterValue.map(
                  item => {
                    return <Header className="header" name={item.name}
                      type={item.type}
                      description={item.description}
                      price={item.price}
                      location={item.location}
                      imgSrc={item.imgSrc}
                    />
                  })
          }
        </div>
      </div>) }
       }