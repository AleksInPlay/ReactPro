import {v4} from "uuid"; 
import "./styles.css";
import {animalsData} from "./data";
import AnimalCard from "../../components/AnimalCard/AnimalCard";

function Lesson05() {
    //masiv komponentov
    //kazduiu iteraciu budet vozvrashat obekt s dannumi opredelennogo zivotnogo
    //console.log(v4());
    const animalCards = animalsData.map((animalData)=>{
return <AnimalCard key={v4()} animalData={animalData}/>
    })
return(
    <div className="lesson05-container">
{/*<AnimalCard animalData={animalData[0]}/>
<AnimalCard animalData={animalData[1]}/>
<AnimalCard animalData={animalData[2]}/>
<AnimalCard animalData={animalData[3]}/>*/}
{animalCards}
</div>
);
}

export default Lesson05;