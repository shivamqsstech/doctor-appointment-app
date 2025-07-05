import jwt from 'jsonwebtoken'

// doctor authentication middleware
/**
 * Middleware to authenticate doctor based on JWT token.
 * It checks for the presence of a token in the request headers,
 * verifies it, and extracts the doctor's ID from it.
 */
const authDoctor = async (req, res, next) => {
    const { dtoken } = req.headers
    if (!dtoken) {
        return res.json({ success: false, message: 'Not Authorized Login Again' })
    }
    try {
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
        req.body.docId = token_decode.id
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authDoctor;