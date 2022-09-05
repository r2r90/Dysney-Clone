import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firabase';
import { doc, getDoc } from 'firebase/firestore';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    (async () => {
      const docRef = doc(db, 'Movies', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setMovie(docSnap.data())
        // console.log(docSnap.data());
      }else {
        console.log('data error');
      }
    })();
   
    
  }, []);

  console.log(movie);

  return (
    <Container>
      <BackGround>
        <img
          src={movie.BackgroundImg}
          alt=""
        />
      </BackGround>
      <ImageTitle>
        <img
          src={movie.TitleImg}
          alt=""
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>{movie.Genres}</SubTitle>
      <Description>
        {movie.Description}
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin: 100px 0 50px 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1.5px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }

  span {
    font-size: 30px;
    color: #fff;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgba(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  max-width: 60%;
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
`;
