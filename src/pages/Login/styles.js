import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  min-width: 300px;
  width: 30%;
  height: 260px;
  margin-top: 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 6px;
  -webkit-box-shadow: 5px 5px 15px 5px #a6a6a6;
  box-shadow: 5px 5px 15px 5px #a6a6a6;

  > button {
    width: 40%;
    margin-top: 15px;
  }
`
