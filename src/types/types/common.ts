// src/types/common.ts

export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';
export type Align = 'left' | 'center' | 'right';

export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  'aria-label'?: string;
}
