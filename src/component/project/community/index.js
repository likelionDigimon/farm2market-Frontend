import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Container,
  Title,
  ButtonContainer,
  Button,
} from "../../emotion/component";
const Community = () => {
  const OuterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  `;

  const TableContainer = styled.div`
    margin-top: 40px;
    padding: 0 147px;
    table {
      width: 100%;
      border-collapse: collapse;
      th {
        border: 1px solid #fff;
        color: #fff;
        padding: 10px;
        background: #76c56f;
      }
      td {
        border: 1px solid #dfdfdf;
        padding: 10px;
      }
      th:nth-of-type(1) {
        width: 1361px;
      }
      th:nth-of-type(2) {
        width: 265px;
      }
      td {
        height: 60px;
      }
      input {
        width: 100%;
        height: 100%;
        border: none;
        background: transparent;
        color: #000;
        font-family: Inter;
        font-size: 14px;
      }
    }
  `;

  const [data, setData] = useState([
    { id: 1, title: "Sample Title 1", author: "John" },
    { id: 2, title: "Sample Title 2", author: "Jane" },
    { id: 3, title: "Sample Title 3", author: "Mike" },
    { id: 4, title: "Sample Title 4", author: "Emily" },
    { id: 5, title: "Sample Title 5", author: "Alice" },
    { id: 6, title: "", author: "" },
    { id: 7, title: "", author: "" },
    { id: 8, title: "", author: "" },
    { id: 9, title: "", author: "" },
    { id: 10, title: "", author: "" },
  ]);

  const handleTitleChange = (index, value) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        index === i ? { ...item, title: value } : item
      )
    );
  };

  const handleAuthorChange = (index, value) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        index === i ? { ...item, author: value } : item
      )
    );
  };

  return (
    <>
      <Container>
        <OuterContainer>
          <Title>커뮤니티</Title>
          <ButtonContainer>
            <Button>글쓰기</Button>
            <Button>내가쓴글</Button>
          </ButtonContainer>
        </OuterContainer>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>제목</th>
                <th>글쓴이</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleTitleChange(index, e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.author}
                      onChange={(e) =>
                        handleAuthorChange(index, e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Community;
