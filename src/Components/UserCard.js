import react from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
const UserCard=({user})=>{
    return(
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
    {user.address.street}
    </Card.Text>
    <Button variant="primary">détails</Button>
  </Card.Body>
</Card>
    )
}
export default UserCard;