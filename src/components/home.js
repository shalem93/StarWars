import React, {useState} from 'react';
import axios from 'axios';

const Home = (props) => {

    const [object, setObject] = useState("");
    const [id, setID] = useState(0);
    const [result, setResult] = useState({});

    // const openDropdown = event => {
    //     document.getElementById("myDropdown").classList.toggle("show");
    // } 

    const onSubmitHandler = event => {
        event.preventDefault();
        axios.get(`https://swapi.co/api/${object}/${id}/`).then(response=>{
            setResult(response.data)
        })
    }

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

      const keys2 = Object.keys(result);

 
    return (
        <div>
            <div className="search">
                <p>Search for:</p>
                <form onSubmit={onSubmitHandler}>
                <select onChange={ event =>setObject(event.target.value)} className="dropdown-content">
                    <option value="" disabled selected>Select your option:</option>
                    <option name="people">people</option>
                    <option name="planets">planets</option>

                </select>
                <p>ID: <input type="number" min="1" name="id" onChange={ event =>setID(event.target.value)}/></p>
                <input type="submit" className="searchVals" value="Search"/>
                </form>
                <div>
            
        </div>
<div>
            {keys2.map((keys, i) =>
                <p>{keys}: {result[keys]}</p>
            )}
        </div>

        </div></div>
    );
}
export default Home;