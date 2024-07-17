'use client';

import styled from 'styled-components';
import ToolTipComponents from './ToolTipComponents';

const ToolTipShowDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ToolTipShow = () => {
  const sampleText =
    '깃주소는 매우매우 아름다운 것깃주소는 매우매우 아름다운 것깃주소는 매우매우 아름다운 것깃주소는 매우매우 아름다운 것깃주소는 매우매우 아름다운 것깃주소는 매우매우 아름다운 것깃주소는 매우매우 아름다운 것';

  return (
    <div>
      <h1> ToolTip Component</h1>
      <ToolTipShowDiv>
        <div>
          <ToolTipComponents type="left" content="블로그">
            <button>블로그</button>
          </ToolTipComponents>
        </div>
        <div>
          <ToolTipComponents type="top" content="깃주소">
            <button>깃주소</button>
          </ToolTipComponents>
        </div>
        <div>
          <ToolTipComponents type="right" content="네이버">
            <button>네이버</button>
          </ToolTipComponents>
        </div>
        <div>
          <ToolTipComponents type="bottom" content={sampleText}>
            <button>깃주소</button>
          </ToolTipComponents>
        </div>
      </ToolTipShowDiv>
    </div>
  );
};

export default ToolTipShow;
