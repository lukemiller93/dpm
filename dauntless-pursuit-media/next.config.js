/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	images: {
		domains: ['cdn.sanity.io', 'res.cloudinary.com', 'images.unsplash.com']
	}
}

module.exports = nextConfig
