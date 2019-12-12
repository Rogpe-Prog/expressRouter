const index = (req, res) => res.render('index')
const contacts = (req, res) => res.render('contacts')
const about = (req, res) => res.render('about')

module.exports = {
    index,
    contacts,
    about
}