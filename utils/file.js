const fs = require('fs')

module.exports = {
    create(folder, title, content) {
        const fileName = `${title}.md`
        const mdContent = `#${title}<br />${content}`

        fs.writeFile(folder + fileName, mdContent, (err) => {
            if (err) throw err
        })
    }
}
