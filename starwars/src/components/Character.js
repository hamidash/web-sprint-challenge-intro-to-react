// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterDiv = styled.div`
    border: 2px solid black;
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1% 30%;
    border-radius: 10% 30% 30%;
    padding: 2%;
    box-shadow: 2px 2px gray;
    background-color: rgba(200,100,0,0.2);
    color: blue;

    @media(max-width: 500px) {
        background-image: url('https://www.news.gatech.edu/sites/default/files/pictures/feature_images/star_wars_002.jpg');
    }
`;

const NameH3 = styled.h3`
    font-size: 2.5 rem;
    
`;

const BirthP = styled.p`
    font-size: 1.5 rem;
`;

const GenderP = styled.p`
    font-size: 1.5 rem;
`;





function Character(props) {
 const {movieData} = props;

 //console.log(movieData[0]);

 return(

    movieData.map((item, index) => { 
        return <CharacterDiv key={"01"}>
                    <NameH3>Name: {item.name}</NameH3>
                    <BirthP>Birth:{item.birth_year}</BirthP>
                    <GenderP>Gender: {item.gender} </GenderP>
                </CharacterDiv>
    })

    
 )
}


export default Character;