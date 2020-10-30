import styled, { keyframes } from "styled-components";

const progress = keyframes`
   0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
`;

export const Shimmer = styled.div`
    position: relative;
    overflow: hidden;
    background: #f0f0f0;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, #f0f0f0, #ffffff, #f0f0f0);
        animation: ${progress} 1s ease-in-out infinite;
    }
`;
