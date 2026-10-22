// @taylorzane/hash-wasm publishes its declarations at a path its package.json
// "exports" does not name ("dist/lib/index.d.ts", without "./"), which the
// bundler resolution refuses; the three names used here, as that file
// declares them. The wasm module is imported as a Worker module.
declare module "@taylorzane/hash-wasm" {
  export interface IHasher {
    init(): IHasher;
    update(data: Uint8Array | string): IHasher;
    digest(outputType: "hex"): string;
    digest(outputType: "binary"): Uint8Array;
    save(): Uint8Array;
    load(state: Uint8Array): IHasher;
    blockSize: number;
    digestSize: number;
  }
  export function createSHA256(): Promise<IHasher>;
  export function loadWasm(wasmFiles: { [name: string]: WebAssembly.Module }): void;
}

declare module "@taylorzane/hash-wasm/wasm/sha256.wasm" {
  const sha256: WebAssembly.Module;
  export default sha256;
}
