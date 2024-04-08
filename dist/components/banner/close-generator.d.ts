import * as React from 'react';
export interface CloseGeneratorProps {
    type: 'error' | 'warning' | 'info' | 'success' | 'default';
    dark?: boolean;
}
declare const CloseGenerator: React.FC<CloseGeneratorProps>;
export default CloseGenerator;
