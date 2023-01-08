import * as React from 'react';
export interface CloseGeneratorProps {
    type: 'error' | 'warning' | 'info' | 'success';
}
declare const CloseGenerator: React.SFC<CloseGeneratorProps>;
export default CloseGenerator;
