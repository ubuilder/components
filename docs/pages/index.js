
import {tag} from '@ulibs/router'
import { View } from '../../src/View.js'

export default () => View({}, [
    tag('a', {href: '/'}, 'UBuilder'),
    tag('h1', {}, 'Components'),
    tag('p', {}, 'Documentation for Components package'),
    tag('ul', {}, [
        tag('li', {}, tag('a', {href: '/components/button'}, 'Button')),
        tag('li', {}, tag('a', {href: '/components/card'}, 'Card')),
        tag('li', {}, tag('a', {href: '/components/view'}, 'View')),
    ])
])