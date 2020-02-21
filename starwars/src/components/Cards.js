import React, { useState } from 'react';
import { Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 0 auto;
`;

const Cards = props => {
    const [likes, setLikes] = useState(0);

    return (
        <StyledDiv>
            <Col xl="12" md="6" xs="12">
                <Card>
                    <CardBody>
                        <CardTitle>{props.name}</CardTitle>
                        {/* <CardImg alt='StarWars Cast' src='./StarWars Cast' /> */}
                        {/* <img alt='StarWars Cast' src='./'/> */}
                        <CardText> Height: {props.height}</CardText>
                        <CardText>Weight: {props.weight}</CardText>
                        <Button onClick={() => { setLikes(likes + 1) }}>{`How many times I've been liked: ${likes}`}</Button>
                    </CardBody>
                </Card>
            </Col>
        </StyledDiv>
    );
};

export default Cards;