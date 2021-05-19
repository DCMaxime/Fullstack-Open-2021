const dummy = (blogs) => 1

const totalLikes = (blogs) => blogs.reduce((accumulator, currentValue) => accumulator + currentValue.likes, 0)

const favoriteBlog = (blogs) => blogs.reduce((mostFavoritedBlog, currentBlog) => mostFavoritedBlog.likes > currentBlog.likes ? mostFavoritedBlog : currentBlog)

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}