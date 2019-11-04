import * as sapper from '@sapper/app'
import ga from './ga'

sapper.start({
  target: document.querySelector('#sapper'),
})

if (process.env.GA_ID) {
  ga(process.env.GA_ID)
}
