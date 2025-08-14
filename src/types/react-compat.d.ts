// Type compatibility fixes for React type mismatches
declare module "react" {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {
      children?: React.ReactNode;
    }
  }
}

// Global type augmentation to fix React type compatibility
declare global {
  namespace React {
    interface ReactPortal {
      children?: ReactNode;
    }
  }
}

export {};
