import React,{useEffect, useState} from 'react'

function Search() {

  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] =useState();
  useEffect(()=> {
    if(searchValue.length > 0){
      fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((result)=>{
      console.log('result',result);
      var filterRes = result.filter(item => item.name.includes(searchValue));
      setSearchResult(filterRes);
        })
        .catch((error)=>{
            console.log('err',error);
        })
      }
  },[searchValue])


    
  return (
    <div>
      <input type ="text" placeholder='Search' name='search' className='searchBar' value={searchValue} onChange={(event)=> setSearchValue(event.target.value)}></input>
      <div className='searchIcon'><i className="fa fa-magnifying-glass"></i>
          <div className='searchList'>
          
              <ul >
                
                {
                  searchResult?.map((item)=>(
                   
                  <li>{item.name}</li>
              ))}
              
              </ul>
          </div>
      </div>

      
    </div>
  )
}

export default Search
