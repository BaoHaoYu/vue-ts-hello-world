export function Page1() {
  // @ts-ignore
  return import(/* webpackChunkName: "Page1" */ '../Page1/Page1')
}
export function Page2() {
  // @ts-ignore
  return import(/* webpackChunkName: "Page2" */ '../Page2/Page2')
}
export function Page1Child1() {
  // @ts-ignore
  return import(/* webpackChunkName: "Page1-Child1" */ '../Page1/Child1/Child1')
}
export function Page1Child2() {
  // @ts-ignore
  return import(/* webpackChunkName: "Page1-Child2" */ '../Page1/Child2/Child2')
}
export function Page2Child1() {
  // @ts-ignore
  return import(/* webpackChunkName: "Page2-Child1" */ '../Page2/Child1/Child1')
}
export function Page2Child1Food() {
  // @ts-ignore
  return import(/* webpackChunkName: "Page2-Child1-Food" */ '../Page2/Child1//Food/Food')
}
export function Page2Child2() {
  // @ts-ignore
  return import(/* webpackChunkName: "Page2-Child2" */ '../Page2/Child2/Child2')
}
