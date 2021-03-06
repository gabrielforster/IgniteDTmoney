import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;
      padding: 0 2rem;
    }

    td {
      &:first-child {
        border-radius: 0.5rem 0 0 0.5rem;
      }
      &:last-child {
        border-radius: 0 0.5rem 0.5rem 0;
      }
      padding: 1rem 2rem;
      border: 0;
      background: #dcdcdc;
      color: var(--text-body);
      /* border-radius: 0.25rem; */

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
