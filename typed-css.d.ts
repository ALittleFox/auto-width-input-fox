declare module '*.module.css' {
  const style: { readonly [key: string]: string }
  export default style
  // const style: any
  // export = style
}