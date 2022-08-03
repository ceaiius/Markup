import Card from 'react-bootstrap/Card';


function Cards({title,subtitle,text,link, url, imageURL,highlighted, className, subtitleName,textName, linkName,beforeHiglight,arrowURL}) {
  return (
    <Card style={{ width: '336px', height:"340px", borderRadius:"14px", display:"flex", flexWrap:"wrap" }}>
      <Card.Body>
        <Card.Title style={{fontFamily:"Arial, Helvetica, sans-serif", fontWeight:"700", fontSize:"18px"}}>
        <span style={{paddingRight:"10px", paddingLeft:"20px"}}><img src={url}/></span>{title}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted"
        style={{paddingTop:"15px", display:"flex"}} 
        ><span>
            <div style={{display:"flex"}}>
                <img className={className} src={imageURL}/>
                
            </div>
        </span>
        <div className='span-div'>
        <span>{beforeHiglight}</span><span className='number-span'>{highlighted}</span><span className={subtitleName}>{subtitle}</span>
        </div></Card.Subtitle>
        <Card.Text className={textName} style={{paddingTop:"10px", paddingLeft:"20px"}}>
          {text}
        </Card.Text>
        <Card.Link className={linkName} href="#">{link} <span style={{paddingLeft:"20px"}}><img src={arrowURL}/></span></Card.Link>
       
      </Card.Body>
    </Card>
  );
}

export default Cards;