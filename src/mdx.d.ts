/// <reference types="vite/client" />

declare module '*.mdx' {
  import { ComponentType } from 'react';
  const Component: ComponentType;
  export default Component;
}

declare module '*.mdx?raw' {
  const content: string;
  export default content;
}
