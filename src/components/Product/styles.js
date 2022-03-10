import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  margin: 20px;
  padding: 25px;
  background-color: #fff;
  text-align: center;
  border-radius: 8px;

  > img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  }

  h4 {
    color: var(--grey);
  }
`
