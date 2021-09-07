import Box from './Components/Box';
import "./App.css"
import {useState} from 'react'
import Colors from './Components/Colors';


function App() {
  const colorArray = Colors();

  const randomColor = () =>{
    const random = parseInt(Math.random()*280);
    return random
  }  

  const generateRandomMatrix = (matrix) =>{
    for(let i=0;i<matrix.length;i++)
    {
      for(let j=0;j<matrix[i].length;j++)
        {
          matrix[i][j] = randomColor();
        }
    }
  return matrix;
  }
    
  let matrix = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0]    
  ]
  
  const [Matrix, setMatrix] = useState(generateRandomMatrix(matrix))

  const clickHandler = (rowIndex, colIndex)=>{
    console.log(rowIndex,colIndex)
    let currMatrix = Matrix
    currMatrix[rowIndex][colIndex] = randomColor()
    
    // NEIGHBOUR
    if(colIndex+1<Matrix.length)
    {
      currMatrix[rowIndex][colIndex+1] = randomColor()
    }
    else if(colIndex-1>=0)
    {
      currMatrix[rowIndex][colIndex-1] = randomColor()
    }
    else if(rowIndex+1<Matrix.length)
    {
      currMatrix[rowIndex+1][colIndex] = randomColor()
    }
    else if(rowIndex-1>=0)
    {
      currMatrix[rowIndex-1][colIndex] = randomColor()
    }

    setMatrix(currMatrix);
    setMatrix([...currMatrix]);
    console.log(Matrix)
  }

  return (
    <span>
      {
        Matrix.map((row, rowIndex) =>{
          return(
            <span>
              {
                row.map((color, colIndex)=>{
                  return (
                  <span onClick={()=> clickHandler(rowIndex,colIndex)}>
                  <Box colorArray={colorArray} color={color} />
                  </span>
                  )
                })
              }
            </span>
          )
        })
      }
     
    </span>
  );
}

export default App;
