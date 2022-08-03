import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import check from "../assets/Check.svg"

function ImageCard({url, name, tag}) {
  return (
    <Card style={{ width: '18rem' }} className="members-card-container">
      <Card.Img style={{width: "166px", height: "166px", position:"relative", marginTop:"10%", outline:"4px dotted #FFAF2E", outlineOffset:"10px", borderRadius: "500px"}} variant="top" src= {url}/>
      <span style={{top:"60%", left:"50%", position:"absolute",transform:"translate(-50%,-50%)"}}><img src={check}/></span>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{textAlign:"center"}}>
          {tag}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default ImageCard;