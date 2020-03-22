import React,{ useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ChildrenPage from './ChildrenPage';
import axios from 'axios'

function App(){

  const [array,setArray] = useState([{
    fName:"",lName:"",age:""
  }])
// handleFname=(e,index)=>{
//   const array = this.state.array;
//     array[index] = {
//       ...array[index],
//       ...{
//         fName: e.target.value
//       }
//     };
//     this.setState({ array })
//     }

// handleLname=(e,index)=>{
//   const array= this.state.array;
//   array[index]={
//     ...array[index],
//     ...{lName:e.target.value}
//   }
//   this.setState({array})
    
//   }
// handleAge=(e,index)=>{
//   const array= this.state.array;
//   array[index]={
//     ...array[index],
//     ...{age:e.target.value}
//   }
//   this.setState({array})
//   }
// handleSubmit =() =>{

//   }
//   handleAddCar = ()=>{
// this.setState({
//   array:

//     this.state.array.concat([{
//       fName:"",
//       lName:"",
//       age:""
//     }])
//   })
//   }
//   handleRemove = (id)=>{
//     this.setState({
//       array:this.state.array.filter((s,index)=> index !== id)
//     })
//   }

const handleFname = (e,index) =>{
  const newArray = [...array];
  newArray[index]={
    ...array[index],
    ...{fName:e.target.value}
  }
  setArray(newArray)
}



const handleLname = (e,index) =>{
  const newArray = [...array];
  newArray[index]={
    ...array[index],
    ...{lName:e.target.value}
  }
  setArray(newArray)
}

const handleAge = (e,index) =>{
  const newArray = [...array];
  newArray[index]={
    ...array[index],
    ...{age:e.target.value}
  }
  setArray(newArray)
}

const handleSubmit = () =>{
  console.log(array)

  let url = `https://bigappcompany.co.in/demos/cms/contact`;
    for (let i = 0; i < array.length; i++) {
      let { fName,lName,age } = array[i];
      let payload = new FormData();
      let str = `from_email=support@curiotechnologies.com&to_email=sethukumar0001@gmail.com&subject=Contact Details&Pickup fName=${fName}&LName=${lName}&Age=${age}`;
      payload.append("product_name", str);
      axios
        .post(url, payload)
        .then(res => {
          if (res.status == 200) {
            // this.clearForm();
            console.log("success")
            setArray([{
              fName:"",lName:"",age:""
            }])
          }
        })
        .catch(err => {
          console.log("the error is ", err);
        });
    }

}

const handleRemove =(id) =>{
setArray(array.filter((data,index)=>id!==index))
}

const handleAdd = () =>{
  setArray(
    array.concat({
      fName:"",
      lName:"",
      age:""
    })
  )

}


  return (
    <div className="App">
      {array.map((data,index)=>{
        return(
      <ChildrenPage
        data={data}
        index={index}
        handleFname={handleFname}
        handleLname={handleLname}
        handleAge={handleAge}
        handleSubmit={handleSubmit}
        handleRemove={handleRemove}
     />
      )
      })     
    }
      <button onClick={handleAdd}>
        Add Form
      </button>
      <button onClick={handleSubmit}>Submit</button>

    </div>
  );
}


export default App;
