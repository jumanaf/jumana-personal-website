// Required by @next/mdx in the App Router. Body styling comes from the
// global `.prose` class applied on the post page, so we pass components through.
export function useMDXComponents(components) {
  return {
    ...components,
  };
}
