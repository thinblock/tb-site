export const codeString = `// Require the Stripe library with a test secret key
var stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

// Create a payment from a test card token
const charge = await stripe.charges.create({
  amount: 2000,
  currency: 'usd',
  source: 'tok_mastercard',
  description: 'My first payment',
})`
