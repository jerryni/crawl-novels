const Crawler = require('crawler')

module.exports = {
    getContentById(id) {
        return new Promise((resolve) => {
            const c = new Crawler({
                maxConnections : 10,
                // This will be called for each crawled page
                callback : function (error, res, done) {
                    if(error){
                        console.log(error)
                    }else{
                        var $ = res.$
                        resolve($('#nr1').text())
                    }
                    done()
                }
            })

            c.queue(`https://m.2kxs.com/book/82840/${id}.html`)
        })
    }
}
