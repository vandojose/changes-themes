import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Spin = styled.div`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: rotate 2s linear infinite;
  background: ${({ theme }) => theme.spin};
  border-radius: 50%;
  height: 200px;
  width: 200px;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
  }

  &:before {
    border-radius: 50%;
    background: linear-gradient(
          0deg,
          ${({ theme }) => theme.body} 30%,
          hsla(0, 0%, 100%, 0.9) 100%
        )
        0% 0%,
      linear-gradient(
          90deg,
          hsla(0, 0%, 100%, 0.9) 80%,
          hsla(0, 0%, 100%, 0.6) 100%
        )
        100% 0%,
      linear-gradient(
          180deg,
          hsla(0, 0%, 100%, 0.6) 0%,
          hsla(0, 0%, 100%, 0.3) 100%
        )
        100% 100%,
      linear-gradient(
          360deg,
          hsla(0, 0%, 100%, 0.3) 0%,
          hsla(0, 0%, 100%, 0) 100%
        )
        0% 100%;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
  }

  &:after {
    background: ${({ theme }) => theme.body};
    border-radius: 50%;
    top: 3%;
    bottom: 3%;
    left: 3%;
    right: 3%;
  }
`;
