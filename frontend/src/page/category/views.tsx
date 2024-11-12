import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../styles/content.scss'
interface Form {
  category_id?: number
  name: string
  handle: string
}

function Views() {
  const [get, setGet] = useState<Form>();
  const {  category_id} = useParams();
  useEffect(() => {
    axios.get(`http://localhost:7777/category/${category_id}` )
      .then(res => {
        setGet(res.data.data)
      }).catch(err => {
        console.log(err)
      })
  }, []);

  return (
    <div className="views" style={{ position: "absolute", width: "500px", left: "40%", marginLeft: "-50px" }}>
      <h1 style={{ textAlign: "center" }}>List Category View Id</h1>
      <table className="table">
        <thead>
          <tr style={{ color: "blue" }}>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr>
              <th scope="row" >{get?.category_id}</th>
              <td>{get?.name}</td>
              <td>{get?.handle}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default Views;