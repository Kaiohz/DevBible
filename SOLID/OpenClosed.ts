// BAD APPROACH - Violating Open/Closed Principle
class PaymentProcessor {
    processPayment(paymentType: string, amount: number): void {
        if (paymentType === "credit_card") {
            // Process credit card payment
            console.log(`Processing credit card payment of $${amount}`);
        } 
        else if (paymentType === "paypal") {
            // Process PayPal payment
            console.log(`Processing PayPal payment of $${amount}`);
        }
        else if (paymentType === "crypto") {
            // Process cryptocurrency payment
            console.log(`Processing crypto payment of $${amount}`);
        }
        // To add a new payment method, we need to modify this class
        // This violates the Open/Closed Principle
    }
}

// GOOD APPROACH - Following Open/Closed Principle
interface PaymentMethod {
    process(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
    process(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class PayPalPayment implements PaymentMethod {
    process(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

class CryptoPayment implements PaymentMethod {
    process(amount: number): void {
        console.log(`Processing crypto payment of $${amount}`);
    }
}

class ImprovedPaymentProcessor {
    processPayment(paymentMethod: PaymentMethod, amount: number): void {
        paymentMethod.process(amount);
    }
}

// Usage example
const processor = new ImprovedPaymentProcessor();

// Process different types of payments
const creditCard = new CreditCardPayment();
const paypal = new PayPalPayment();
const crypto = new CryptoPayment();

processor.processPayment(creditCard, 100);
processor.processPayment(paypal, 50);
processor.processPayment(crypto, 75);

// Adding a new payment method is as simple as creating a new class
class GooglePayPayment implements PaymentMethod {
    process(amount: number): void {
        console.log(`Processing Google Pay payment of $${amount}`);
    }
}

// No need to modify existing code to add new payment method
const googlePay = new GooglePayPayment();
processor.processPayment(googlePay, 200); 