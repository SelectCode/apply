
import jwt from '@tsndr/cloudflare-worker-jwt'

//Key used for signing and validating JWT's
const secret = `MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAr+2VmwBzzGvrY8F7HsMa/Ffgy0dwhWvJ3Ay8NgjMBfHMrC3Aj2uLKRA588dF8JmAoEsYayikyf9VNum9xRfIzKodrGFX9B6w8TmCE8Z5IjTZ2ecagUHmx6NkxWZnTMho1mNyLpTjC9AGDWSpTBBGHvjuBaY7X6vE0NvcoILdMCbDLTipyMiugHzrG5LqI5Xu8+xc6Cbf0Zjp56fptR71JnpMQJG6ZD6aEX6fZPfb7t2Lwpb+ZpOdQD+2nXYDzNljmrkBDARHOIh/i8RM9Ryae3RQA0KvDHpEbsSl5olspq7Z0mZ9MqJelXptV5fjLnZp6CbSIMNBIUQToJqkms4bpYCHCoGcbDq0+jOIyXiIn4QGZq7Cx88SCFVUud8wErd3FD70W4wO2INkYIEiozSKQwdDzaUcOVpT9thLL45b9kc3hiMm987UJk1MoajQHyay2rycbEdLlhR0qEfaVCMsRzAW43FRzR0KcRJJzlQVsavVwo5Od+/S3tD6poKYyrLRx1PQSx/91agdFCS93+xo9/h+wVzDoes/Ov/GNTSU9qbUE90a4H+594L8Jklqlo0wEgaK+wq2po4cmP5neVXpjtT1leLr4dI2zvQYGVjf2ZnQhl0/OX0EWotRcCtB3TabdX/ldAco/EnRSyKQY0jmXRJ6xrrBtTJ5XD2t+VLkVdUCAwEAAQ==`

export default {

	async fetch(request: Request) {

		const email = JSON.parse(await request.text())['email']

		const token = await jwt.sign({
			"https://hasura.io/jwt/claims": {
				"x-hasura-default-role": "user",
				"x-hasura-allowed-roles": ["user", "admin"],
				"x-hasura-user-email-address": email
			}
		}, secret)
		
		return new Response(token)
	}
};
