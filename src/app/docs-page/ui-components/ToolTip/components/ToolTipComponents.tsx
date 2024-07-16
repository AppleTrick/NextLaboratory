'use client';

import { ReactNode } from 'react';
import { ToolTip, ToolTipWrapper, ToolTipText } from './ToolTipComponents.styles';

interface ToolTipProps {
  children: ReactNode;
  content: string;
  type: 'bottom' | 'top' | 'right' | 'left';
}

const ToolTipComponents: React.FC<ToolTipProps> = ({ children, content, type }) => {
  return (
    <div>
      <ToolTipWrapper>
        {children}
        <ToolTip type={type}>
          <ToolTipText>{content}</ToolTipText>
        </ToolTip>
      </ToolTipWrapper>
    </div>
  );
};

export default ToolTipComponents;
