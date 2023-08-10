import React from 'react';
import { IndexContainer, Input, InputH1, InputSpan, Output, WritingArea } from './component';

function AIWriting() {
  return (
    <IndexContainer>
      <WritingArea>
        <Input>
          <InputH1>
          온라인 등록을 위해 간단한 정보를 입력해주세요!
          <br/>
          <InputSpan>
          구체적인 내용은 인공지능이 대신 작성해줄 거예요.          
          </InputSpan>
          </InputH1>
        
        </Input>
        <Output>

        </Output>
      </WritingArea>
    </IndexContainer>
  );
}

export default AIWriting;
