// Plugin to replace global variables in markdown
export function globalVarsPlugin(md, options = {}) {
    const { variables = {} } = options

    // Store original render function
    const originalRender = md.render.bind(md)

    // Override render function
    md.render = function (src, env) {
        // Replace variables in the format {{VARIABLE_NAME}}
        let processedSrc = src

        Object.keys(variables).forEach(key => {
            const regex = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, 'g')
            processedSrc = processedSrc.replace(regex, variables[key])
        })

        return originalRender(processedSrc, env)
    }
}
