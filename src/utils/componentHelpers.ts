export function filterProps(props: string[], $$props: Record<string, any>, include = false): Record<string, any> {
  const ret: Record<string, any> = {}, set = new Set()
  for (const prop of props) {
    set.add(prop)
  }
  for (const key in $$props) {
    if ((set.has(key) && include) || (!set.has(key) && !include)) {
      ret[key] = $$props[key]
    }
  }
  return ret
}
