import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;

  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #fff;
    height: 200px;
    margin: 10px 10%;
    border-radius: 6px;
  }

  @media screen and (min-width: 1024px) {
    > ul,
    > div {
      width: 90%;
    }

    display: flex;
    justify-content: center;

    > ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
    }

    > div {
      width: 22%;
    }
  }
`
