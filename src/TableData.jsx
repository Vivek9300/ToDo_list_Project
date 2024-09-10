import React, { useEffect, useState } from 'react'


function TableData() {

  let [info, setinfo] = useState([])
  let [sortOrder, setsortOrder] = useState('asc')
  let [searchInfo, setsearchInfo] = useState([])
  let [edit, setedit] = useState(false)
  let [editInput,setEditInput] = useState("")
  let [editInd,setEditInd] = useState(-1);
  let [editText,setEditText] = useState({});

  async function fetchData() {
    // console.log("gygy");

    let Response = await fetch("https://jsonplaceholder.typicode.com/todos")
    let Data = await Response.json()
    console.log(Data)
    setinfo(Data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function deleteTitle(id) {
    setinfo(info.filter(item => item.id !== id))
  }

  function Acce_Dec() {
    let sortedInfo;
    if (sortOrder == 'asc') {
      sortedInfo = [...info].sort((a, b) => a.id - b.id)
      setsortOrder('desc')
      // setinfo(sortedInfo);

    } else if (sortOrder == 'desc') {
      sortedInfo = [...info].sort((a, b) => b.id - a.id)
      setsortOrder('asc');
      // setinfo(sortedInfo)
    }
    setinfo(sortedInfo);
  }

  function Search(e) {
    setsearchInfo(e.target.value)

  }

  useEffect(() => {
    if (searchInfo.length != 0) {
      let InfoSearch = info.filter((ele) => {
        return ele.title == searchInfo
      })
      setinfo(InfoSearch)
    }
  }, [searchInfo])

  function editTitle(ind,ele) {
    // console.log(ele)
    setedit(true);
    setEditInd(ind);
    setEditText(ele)
    
  }

  function newTitle(){
    // console.log(editInd);
    // console.log(editInput);
    // console.log(editText)
    editText.title = editInput
    let tempArr = [...info];
    tempArr.splice(editInd,1,editText);
    setinfo(tempArr)
    
  }
// console.log("######",info)
  return (
    <>
    
    {
      edit ? (<div>
        <input type="text" value={editInput} onChange={(e) => setEditInput(e.target.value)}/>
        <button onClick={()=>newTitle()}>Save</button>
      </div>) : ""
    }
      <div>
        <table border="1" style={{ width: '100%', textAlign: 'left' }}>
          <tr>
            <th>Sr.No.</th>
            <th>Id <button onClick={() => Acce_Dec()}>⇅</button></th>
            <th>Title <input type="text" value={searchInfo} onChange={(e) => Search(e)} placeholder='Search Title...' /></th>
            <th>Button</th>
          </tr>

          <tbody>
            {
              info.map((ele, index) => {
                return (
                  <tr key={ele.id}>
                    <td>{index + 1}</td>
                    <td>{ele.id}</td>
                    <td>{ele.title} </td>
                    <td>
                      <button onClick={() => deleteTitle(ele.id)}>Delete</button>
                      <button onClick={() => editTitle(index,ele)}>Edit</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableData;


