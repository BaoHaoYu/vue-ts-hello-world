import { ComponentOptions } from 'vue'
// @ts-ignore
import logo from '../logo.svg'
// @ts-ignore
import css from './App.scss'
export default {
  name: 'App',
  data() {
    return {
      css,
      logo,
    }
  },
} as ComponentOptions<any>
