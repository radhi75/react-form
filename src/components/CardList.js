import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardList = () => {
  const data = [
    {
      name: "test1",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
      description: "testetstetstetstetstetestetetstet",
    },
    {
      name: "test2",
      image:
        "https://t4.ftcdn.net/jpg/03/88/74/61/360_F_388746199_q5Wd1YQCX0CGDLxtNH9ERCaiK09ff2vL.jpg",
      description: "FIAENIH?HROQO?QO?QOG?QIBQB?0BO?IQGNQiàb949491651984",
    },
    {
      name: "test3",
      image:
        "https://media.istockphoto.com/id/1292908098/photo/cant-be-bothered-full-length-photo-of-charming-dancer-aged-lady-listen-music-earphones-hands.jpg?s=612x612&w=0&k=20&c=EpXde4BPSA6TYZjRmwsWhbXGkjoXEXRMR1GsvRpOVzk=",
      description: "sijsbnugineaiçudqniçubqniçeagniçZFI9WBIGEQOIONIBQIQEGAI9",
    },
  ];
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {data.map((el) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={el.image} />
          <Card.Body>
            <Card.Title>{el.name}</Card.Title>
            <Card.Text>{el.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
