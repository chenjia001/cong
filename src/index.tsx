// 创建组件库模块人口文件
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export {default as Button} from './components/Button'
export {default as Icon} from './components/Icon'
export {default as Menu} from './components/Menu'
