import * as React from 'react';
export interface CloseGeneratorProps {
    type: 'error' | 'warning' | 'info' | 'success';
}
declare const CloseGenerator: React.FC<CloseGeneratorProps>;
export default CloseGenerator;
