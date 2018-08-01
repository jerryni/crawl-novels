const Crawler = require('crawler')
const chapter = require('./src/chapter')
const fileHandler = require('./utils/file')
const category = require('./novels/category')

const curNovel = category.list[0]

const c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function(error, res, done) {
        if (error) {
            console.log(error)
        } else {
            var $ = res.$

            console.time('1')
            $('.chapter li a').each((index, item) => {
                const id = $(item).attr('href').replace('.html', '')
                const title = $(item).text().replace('/', '')

                chapter.getContentById(id).then(content => {
                    fileHandler.create(`./novels/${curNovel.name}/`, title, content)
                })
            })
            console.timeEnd('1')
        }
        done()
    }
})

c.queue(category.host + curNovel.id)
