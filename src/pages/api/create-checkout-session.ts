import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { cart } = body;

    if (!cart || !Array.isArray(cart)) {
      return new Response(JSON.stringify({ error: 'Invalid cart data' }), { status: 400 });
    }

    // In a real application, you would:
    // 1. Validate the cart items and prices against your database/product data.
    // 2. Create a Stripe Checkout session with the line items.
    // const lineItems = cart.map(item => ({
    //   price_data: {
    //     currency: 'eur',
    //     product_data: {
    //       name: item.name,
    //       // images: [item.image], // Stripe expects publicly accessible URLs
    //     },
    //     unit_amount: Math.round(item.price * 100), // Price in cents
    //   },
    //   quantity: item.quantity,
    // }));
    //
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ['card'],
    //   line_items: lineItems,
    //   mode: 'payment',
    //   success_url: `${request.headers.get('origin')}/commande/succes?session_id={CHECKOUT_SESSION_ID}`,
    //   cancel_url: `${request.headers.get('origin')}/panier`,
    // });
    //
    // return new Response(JSON.stringify({ sessionId: session.id }), { status: 200 });

    // For now, simulate a successful response with a dummy session ID
    console.log("Received cart for checkout:", JSON.stringify(cart, null, 2));
    const mockSessionId = `cs_test_${Date.now()}`; // Create a fake session ID

    return new Response(JSON.stringify({ sessionId: mockSessionId }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error creating checkout session:', error);
    return new Response(JSON.stringify({ error: 'Internal server error creating checkout session' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
