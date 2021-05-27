declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;

  const url: string;
  export default url;
}

declare module 'tiny-secp256k1' {
  export const isPoint: (buffer: Buffer) => boolean;
}
