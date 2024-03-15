import fileSave from 'file-save'
import getTemplate from './template.js'
import componentsMap from '../components.json' assert {type: 'json'}

let readTemplate = {
    import: '',
    export: ''
}

for (let key in componentsMap) {
    const getComponentTemplate = getTemplate({ name: key }).setComponentTemplate()
    readTemplate.import += `import { ${key} } from './${key}/index'; \n`;
    readTemplate.export += `${key}, \n`;
    fileSave(componentsMap[key]).write(getComponentTemplate, 'utf-8').end('\n')
}


const renderTemplate = `
${readTemplate.import}
export {
${readTemplate.export}
}
`

fileSave('../src/index.ts').write(renderTemplate, 'utf-8').end('\n')
