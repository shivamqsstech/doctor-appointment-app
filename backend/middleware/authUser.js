import jwt from 'jsonwebtoken'

// user authentication middleware
/**
 * Middleware to authenticate user based on JWT token.
 **/
const authUser = async (req, res, next) => {
    // token to verify user  
    const { token } = req.headers
    if (!token) {

// * If the token is missing or invalid, it responds with an error message.
        return res.json({ success: false, message: 'Not Authorized Login Again' })
    }
    try {
        // * If the token is valid, it decodes the token to extract user information.
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authUser;