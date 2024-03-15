function getTemplate(variable) {
const { name } = variable;
function setComponentTemplate() {
return `import { ${name} } from 'ant-design-vue';

export default ${name};
`
}
return {
    setComponentTemplate
}
}
    
export default getTemplate;
    
