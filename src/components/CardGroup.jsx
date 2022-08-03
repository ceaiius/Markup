import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardGroup({title,titleName, text, url,style}) {
  return (

          <Card className='card-group col-sm'>
            
            <Card.Body style={{display:"flex"}}>
            <div className="cardgroup-img-div">
            <Button style={style} className="btn btn-light me-5 features-btn"><i><img src={url}/></i></Button>
                
            </div>
            <div className='cardgroup-text-div' style={{display:"flex", flexDirection:"column"}}>
                <Card.Title style={{color:"#2F2C4A", fontFamily:"Helvetica", fontWeight:"600"}} className={titleName}>{title}</Card.Title>
                <Card.Text style={{color:"#656464", fontFamily:"Helvetica"}}>
                    {text}
                </Card.Text>
            </div>
              
            </Card.Body>
          </Card>
        
  );
}

export default CardGroup;