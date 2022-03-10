import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  margin: 10px;
  padding: 10px 0px;
  border-radius: 6px;

  h3 {
    width: 41vw;
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h4 {
    color: var(--grey);
    font-size: 0.7rem;
    margin-top: 10px;
  }

  > img {
    width: 130px;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (min-width: 768px) {
    h3 {
      width: 300px;
      white-space: normal;
    }
  }

  /* transition: 0.3s; */
`
export const Quantity = styled.div`
  min-width: 100px;
  justify-self: end;
`
